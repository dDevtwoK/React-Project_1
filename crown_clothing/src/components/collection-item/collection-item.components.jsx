import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.components';

import './collection-item.styled.scss';

const CollectionItem = ({ item, dispatch }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};



export default connect()(CollectionItem);
