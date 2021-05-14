import { all, call } from 'redux-saga/effects';
import { cartSagas } from './cart/cart.sagas';
import { collectionSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
  yield all([call(collectionSagas), call(userSagas), call(cartSagas)]);
}
