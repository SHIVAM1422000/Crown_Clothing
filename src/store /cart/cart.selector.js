import { createSelector } from "reselect";

export const selectCartItems = (state) => state.cart.cartItems;
export const selectIsCartOpen = (state) => state.cart.isCartOpen;
//generate new cart item count
export const selectCartCount = (state) =>
  state.cart.cartItems.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  );
  //generate new cart items total price
export const selectCartTotal = (state) =>
  state.cart.cartItems.reduce(
    (total, currentItem) => total + currentItem.price * currentItem.quantity,
    0
  );



