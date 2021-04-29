import React from 'react';

import { connect } from 'react-redux';

import { removeItemFromCart } from '../redux/cart/cart.actions';
import { addItem } from '../redux/cart/cart.actions';
import { reduceItem } from '../redux/cart/cart.actions';

import './checkout-item.styled.scss';

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div
          className='arrow arrow-left'
          onClick={() => dispatch(reduceItem(cartItem))}
        >
          &#10094;
        </div>
        {quantity}
        <div
          className='arrow arrow-right'
          onClick={() => dispatch(addItem(cartItem))}
        >
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => dispatch(removeItemFromCart(cartItem))}
      >
        &#10008;
      </div>
    </div>
  );
};
export default connect()(CheckoutItem);
