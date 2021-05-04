import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../../firebase/firebase.utils';
import { fetchCollectionFailure, fetchCollectionSuccess } from './shop.actions';
import { ShopActionTypes } from './shop.types';

function* fetchCollectionStartAsync() {
  try {
    const collectionRef = firestore.collection('collection');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionStartAsync
  );
}

export function* collectionSagas() {
  yield all([call(fetchCollectionStart)]);
}
