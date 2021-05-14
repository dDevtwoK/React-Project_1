/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { CartDetailsStyled, CartItemStyled } from './cart-item.styled';

const CartItem = ({ name, price, imageUrl, quantity }) => (
  <CartItemStyled>
    <img src={imageUrl} alt="item 's image" />
    <CartDetailsStyled>
      <span>{name}</span>
      <span>
        {quantity} × ${price}
      </span>
    </CartDetailsStyled>
  </CartItemStyled>
);

export default CartItem;
