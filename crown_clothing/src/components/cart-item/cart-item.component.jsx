import React from 'react';

import './cart-item.styled.scss';

const CartItem = ({ name, price, imageUrl, quantity }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt="item 's image" />
    <div className='item-details'>
      <span>{name}</span>
      <span>
        {quantity} × ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
