import { ShopActionTypes } from './shop.types';

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = collectionMap => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});
