import React from 'react';
import './collection.styled.scss';

import { connect } from 'react-redux';

import { collectionSelector } from '../../components/redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.components';

const CollectionPage = ({ collections, match }) => {
  console.log(match);
  return (
    <div className='collection-page'>
      <h2 className='title'>{collections.title}</h2>
      <div className='items'>
        {collections.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: collectionSelector(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
