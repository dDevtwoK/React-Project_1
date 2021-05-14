import React from 'react';

import { connect } from 'react-redux';

import { removeItemFromCart } from '../redux/cart/cart.actions';
import { addItem } from '../redux/cart/cart.actions';
import { reduceItem } from '../redux/cart/cart.actions';
import {
  ArrowLeft,
  ArrowRight,
  CheckOutItemContainer,
  ImageContainer,
  NameStyled,
  PriceStyled,
  QuantityStyled,
  RemoveButtonStyled,
} from './checkout-item.styled';

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <NameStyled>{name}</NameStyled>
      <QuantityStyled>
        <ArrowLeft onClick={() => dispatch(reduceItem(cartItem))}>
          &#10094;
        </ArrowLeft>
        {quantity}
        <ArrowRight onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </ArrowRight>
      </QuantityStyled>
      <PriceStyled>${price}</PriceStyled>
      <RemoveButtonStyled
        onClick={() => dispatch(removeItemFromCart(cartItem))}
      >
        &#10008;
      </RemoveButtonStyled>
    </CheckOutItemContainer>
  );
};
export default connect()(CheckoutItem);
