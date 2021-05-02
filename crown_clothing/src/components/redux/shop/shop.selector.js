import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const shopCollectionsSelector = createSelector(
  [shopSelector],
  shop => shop.collections
);

export const collectionsForPreviewSelector = createSelector(
  [shopCollectionsSelector],
  collections => (collections ? Object.values(collections) : [])
);

export const collectionSelector = collectionUrlParam =>
  createSelector([shopCollectionsSelector], collections =>
    collections ? collections[collectionUrlParam] : null
  );
