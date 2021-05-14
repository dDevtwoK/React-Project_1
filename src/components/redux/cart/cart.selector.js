import { createSelector } from 'reselect';

const cartSelector = state => state.cart;

export const cartItemsSelector = createSelector(
  [cartSelector],
  cart => cart.cartItems
);

export const cartHidden = createSelector([cartSelector], cart => cart.hidden);

export const cartItemsCountSelector = createSelector(
  [cartItemsSelector],
  cartItems =>
    cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    )
);

export const cartItemsPriceTotal = createSelector(
  [cartItemsSelector],
  cartItems =>
    cartItems.reduce(
      (accumulator, cartItem) =>
        accumulator + cartItem.quantity * cartItem.price,
      0
    )
);
