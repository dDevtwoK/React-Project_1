import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { cartToggleHidden } from '../../components/redux/cart/cart.actions';

import { cartItemsCountSelector } from '../redux/cart/cart.selector';
import {
  CartIconStyled,
  ItemCountStyled,
  ShoppingIcon,
} from './cart-icon.styled';

const CartIcon = ({ itemCount, dispatch }) => (
  <CartIconStyled
    onClick={() => {
      dispatch(cartToggleHidden());
    }}
  >
    <ShoppingIcon />
    <ItemCountStyled>{itemCount}</ItemCountStyled>
  </CartIconStyled>
);

const mapStateToProps = createStructuredSelector({
  itemCount: cartItemsCountSelector,
});
export default connect(mapStateToProps)(CartIcon);
