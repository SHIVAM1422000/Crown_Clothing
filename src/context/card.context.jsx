import { createContext, useState, useEffect, useReducer } from "react";
import { createAction } from '../utils/reducer/reducer.utils';


// action types
const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

// adding useReducer function for card/cart context
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

//returns new state after handeling the action
const cartReducer = (state, action) => {
  // we will make a generic function that sends a payload which conatains updated cartItems, totalPrice, totalItems
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`Unhandeled type error : ${type} from cartReducer`);
  }
};

// Card Context Property
export const CardContext = createContext({
  setIsCartOpen: () => null,
  addItemsToCart: () => null,
  removeItemsFromCart: () => null,
  removeItemFromCheckout: () => null,
  isCartOpen: false,
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
});

export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, totalItems, totalPrice, isCartOpen } = state;

  // reducer helper function to make newCartItem, cartTotal, totalPrice
  const updateCartItemReducer = (cartItems) => {
    //generate new cart item count
    const new_total_items = cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );

    //generate new cart items total price
    const new_total_cost = cartItems.reduce(
      (total, currentItem) => total + currentItem.price * currentItem.quantity,
      0
    );

    // dispatching new action with proper payloads to add/ remove new cart item


    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: cartItems,
        totalItems: new_total_items,
        totalPrice: new_total_cost,
      },
    });
  };

  // dispatching to toggle the cart button on and off
  const setIsCartOpen = (bool) => {
    /**
     This method of dispatch was modified using an helper function createAction
           dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool });
     Either of the ways are good
    */

      dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool))     



  };

  // These methods call the helper function internally to execute the task

  //add one item
  const addItemsToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItemReducer(newCartItems);
  };

  // remove one item
  const removeItemsFromCart = (product) => {
    const newCartItems = removeCartItem(cartItems, product);
    updateCartItemReducer(newCartItems);
  };

  //complete removal of item
  const removeItemFromCheckout = (product) => {
    const newCartItems = removeCheckoutItem(cartItems, product);
    updateCartItemReducer(newCartItems);
  };

  const value = {
    cartItems,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
    addItemsToCart,
    removeItemsFromCart,
    removeItemFromCheckout,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

/**     HELPER FUNCTIONS          */

// helper function to add a new item one by one :-
const addCartItem = (cartItems, productToAdd) => {
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
  return cartItems.filter((item) => item.id !== product.id);
};
