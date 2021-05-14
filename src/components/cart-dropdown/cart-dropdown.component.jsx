import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { cartItemsSelector } from '../redux/cart/cart.selector';

import CartItem from '../cart-item/cart-item.component';
import { cartToggleHidden } from '../redux/cart/cart.actions';
import {
  CartItems,
  CartDropdownContainer,
  EmptyMessage,
  AddButtonDropdown,
} from './cart-dropdown.styled';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map(cartItem => <CartItem key={cartItem.id} {...cartItem} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItems>
    <AddButtonDropdown
      onClick={() => {
        history.push('/checkout');
        dispatch(cartToggleHidden());
      }}
    >
      GO TO CHECKOUT
    </AddButtonDropdown>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
