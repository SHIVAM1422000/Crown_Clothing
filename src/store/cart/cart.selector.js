import { createSelector } from "reselect";

/**


const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
  );
  export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
    );
    
    //generate new cart item count
    export const selectCartTotal = createSelector(
      [selectCartItems],
      (cartItems) => {
        if (cartItems)
        return cartItems.reduce(
          (total, currentItem) => total + currentItem.quantity,
          0
          );
          else return 0;
        }
        );
        
        //generate new cart items total price
        export const selectCartCount = createSelector(
          [selectCartItems],
          (cartItems) => {
            if (cartItems)
            return cartItems.reduce(
              (total, currentItem) =>
              total + currentItem.price * currentItem.quantity,
              0
              );
              else return 0;
            }
            );
            
            
            */

            

//    I m p r o v i s e d            V e r s i o n

export const selectCartItems = (state) => state.cart.cartItems;

export const selectIsCartOpen = (state) => state.cart.isCartOpen;

//generate new cart item count
export const selectCartTotal = (state) => {
  const cartItems = state.cart.cartItems;
  if (cartItems) {
    return cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );
  } else {
    return 0;
  }
};

//generate new cart items total price

export const selectCartCount = (state) => {
  const cartItems = state.cart.cartItems;
  if (cartItems) {
    return cartItems.reduce(
      (total, currentItem) => total + currentItem.price * currentItem.quantity,
      0
    );
  } else {
    return 0;
  }
};
