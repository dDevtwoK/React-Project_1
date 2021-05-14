import React from 'react';

import { connect } from 'react-redux';

import { collectionSelector } from '../../components/redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.components';
import {
  CollectionPageStyled,
  ItemsStyled,
  TitleStyled,
} from './collection.styled';

const CollectionPage = ({ collections, match }) => {
  console.log(match);
  return (
    <CollectionPageStyled>
      <TitleStyled>{collections.title}</TitleStyled>
      <ItemsStyled>
        {collections.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsStyled>
    </CollectionPageStyled>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: collectionSelector(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
