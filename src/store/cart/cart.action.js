import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.action.types";

/**
 
       *******************       ACTION CREATORS      ******************

*/

// toggle cart open/ close status
export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

//add one item
export const addItemsToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
};

// remove one item
export const removeItemsFromCart = (cartItems, product) => {
  const newCartItems = removeCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
};

//complete removal of item
export const removeItemFromCheckout = (cartItems, product) => {
  const newCartItems = removeCheckoutItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
};

/**
 *
 *
 *              *********    HELPER FUNCTIONS   *****************
 *
 *      */

// helper function to add a new item one by one :-
const addCartItem = (cartItems, productToAdd) => {
    if(!cartItems) return
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//helper function to remove a cart item one by one :-
const removeCartItem = (cartItems, cartItemToRemove) => {
    if(!cartItems) return
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart :-
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity :-
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// helper function to remove a checkout item completely
const removeCheckoutItem = (cartItems, product) => {
    if(!cartItems) return
  return cartItems.filter((item) => item.id !== product.id);
};
