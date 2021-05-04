import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider,
} from '../../../firebase/firebase.utils';
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from './user.actions';
import { UserActionTypes } from './user.types';

function* getSnapshotFromUser(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const snapshot = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* googleSignInAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUser(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
function* emailSignInAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUser(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* isAuthenticatedUser() {
  try {
    const userAuth = yield getCurrentUser();
    console.log(userAuth);
    if (!userAuth) return;
    yield getSnapshotFromUser(userAuth);
  } catch (error) {
    put(signInFailure(error.message));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

function* signUpAsync({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUser(user, additionalData);
}

export function* googleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignInAsync);
}

export function* emailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignInAsync);
}

export function* checkUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isAuthenticatedUser);
}
export function* signOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}
export function* signUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpAsync);
}
export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(googleSignInStart),
    call(emailSignInStart),
    call(checkUserSession),
    call(signOutStart),
    call(signUpStart),
    call(onSignUpSuccess),
  ]);
}
