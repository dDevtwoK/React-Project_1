import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  cartItemsSelector,
  cartItemsPriceTotal,
} from '../../components/redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import StripeButton from '../../components/stripe-button/stripe-button.component';

import {
  CheckoutContainer,
  CheckoutHeaderStyled,
  HeaderBlockStyled,
  TestWarningStyled,
  TotalStyled,
} from './checkout.styled';

const CheckoutPage = ({ total, cartItems }) => (
  <CheckoutContainer>
    <CheckoutHeaderStyled>
      <HeaderBlockStyled>
        <span>Product</span>
      </HeaderBlockStyled>
      <HeaderBlockStyled>
        <span>Description</span>
      </HeaderBlockStyled>
      <HeaderBlockStyled>
        <span>Quantity</span>
      </HeaderBlockStyled>
      <HeaderBlockStyled>
        <span>Price</span>
      </HeaderBlockStyled>
      <HeaderBlockStyled>
        <span>Remove</span>
      </HeaderBlockStyled>
    </CheckoutHeaderStyled>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalStyled>${total}</TotalStyled>
    <TestWarningStyled>
      * Vui long nhap ma duoi day
      <br />
      4242 4242 4242 4242 - Exp: 01/21 ; CVV: 123
    </TestWarningStyled>
    <StripeButton price={total} />
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  total: cartItemsPriceTotal,
  cartItems: cartItemsSelector,
});

export default connect(mapStateToProps)(CheckoutPage);
