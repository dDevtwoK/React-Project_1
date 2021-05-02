import { ShopActionTypes } from './shop.types';

export const updateCollections = collections => ({
  type: ShopActionTypes.UPDATE_COLLECTION,
  payload: collections,
});
