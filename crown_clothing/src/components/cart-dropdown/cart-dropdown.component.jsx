import React from 'react';

import './cart-dropdown.styled.scss';

import CustomButton from '../custom-button/custom-button.components';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton> GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
