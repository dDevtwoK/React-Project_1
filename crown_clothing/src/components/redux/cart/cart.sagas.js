import { all, call, put, takeLatest } from 'redux-saga/effects';
import { UserActionTypes } from '../user/user.types';
import { clearCart } from './cart.actions';

function* clearCartAfterSignOut() {
  yield put(clearCart());
}

export function* signOutUSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartAfterSignOut);
}
export function* cartSagas() {
  yield all([call(signOutUSuccess)]);
}
