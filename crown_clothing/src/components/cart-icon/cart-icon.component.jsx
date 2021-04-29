import React from 'react';

import { connect } from 'react-redux';

import { cartToggleHidden } from '../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styled.scss';

const CartIcon = ({ cartToggleHidden }) => (
  <div className='cart-icon' onClick={cartToggleHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  cartToggleHidden: () => dispatch(cartToggleHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
