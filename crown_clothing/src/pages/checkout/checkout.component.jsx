import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  cartItemsSelector,
  cartItemsPriceTotal,
} from '../../components/redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styled.scss';
import StripeButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ total, cartItems }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>${total}</div>
    <div className='test-warning'>
      * Vui long nhap ma duoi day
      <br />
      4242 4242 4242 4242 - Exp: 01/21 ; CVV: 123
    </div>
    <StripeButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  total: cartItemsPriceTotal,
  cartItems: cartItemsSelector,
});

export default connect(mapStateToProps)(CheckoutPage);
