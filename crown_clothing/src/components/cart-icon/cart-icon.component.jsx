import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { cartToggleHidden } from '../redux/cart/cart.actions';
import { cartItemsCountSelector } from '../redux/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styled.scss';

const CartIcon = ({ cartToggleHidden, itemCount }) => (
  <div className='cart-icon' onClick={cartToggleHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  cartToggleHidden: () => dispatch(cartToggleHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: cartItemsCountSelector,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
