import React from 'react';
import './collection-preview.styled.scss';
import CollectionItem from '../collection-item/collection-item.components';

const CollectionPreview = ({ title, items }) => (
  <div class='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((_item, idx) => idx < 4)
        .map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
