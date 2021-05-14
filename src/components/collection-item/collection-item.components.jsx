import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  AddButton,
  ImageStyled,
  CollectionFooter,
  PriceStyled,
  NameStyled,
} from './collection-item.styled';

const CollectionItem = ({ item, dispatch }) => {
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemContainer>
      <ImageStyled className='image' image={imageUrl} />
      <CollectionFooter className='collection-footer'>
        <NameStyled>{name}</NameStyled>
        <PriceStyled>${price}</PriceStyled>
      </CollectionFooter>
      <AddButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default connect()(CollectionItem);
