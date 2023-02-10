import { CART_ACTION_TYPES } from "./cart.action.types";
import { createAction } from "../../utils/reducer/reducer.utils";

/**
 
                            UTILITY FUNCTIONS 
                        ===========================
These functions internally calls the HELPER functions internally to execute the generate ACTION for dispatching

*/

//set is cart open status
export const setIsCartOpenActionCreator = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
};

//add one item
export const addItemsToCartActionCreator = (cartItems, product) => {
  const newCartItems = addCartItemHelper(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

// remove one item
export const removeItemsFromCartUtilityActionCreator = (cartItems, product) => {
  const newCartItems = removeCartItemHelper(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

//complete removal of item
export const removeItemFromCheckoutUtilityActionCreator = (cartItems, product) => {
  const newCartItems = removeCheckoutItemHelper(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

/**                HELPER FUNCTIONS          */

// helper function to add a new item one by one :-
const addCartItemHelper = (cartItems, productToAdd) => {
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
const removeCartItemHelper = (cartItems, cartItemToRemove) => {
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
const removeCheckoutItemHelper = (cartItems, product) => {
  return cartItems.filter((item) => item.id !== product.id);
};
