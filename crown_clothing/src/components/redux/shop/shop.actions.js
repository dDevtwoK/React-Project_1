import { ShopActionTypes } from './shop.types';

export const updateCollectionFormFirebase = collections => ({
  type: ShopActionTypes.UPDATE_COLLECTION_FROM_FIREBASE,
  payload: collections,
});
