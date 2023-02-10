import { CART_ACTION_TYPES } from './cart.action.types';
  
  // adding useReducer function for card/cart context
  const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
  };
  
  //returns new state after handeling the action
  export const cartReducer = (state=INITIAL_STATE, action={}) => {
    // we will make a generic function that sends a payload which conatains updated cartItems, totalPrice, totalItems
    const { type, payload } = action;
  
    switch (type) {
      case CART_ACTION_TYPES.SET_CART_ITEMS:
        return {
          ...state,
          cartItems:payload,
        };
  
      case CART_ACTION_TYPES.SET_IS_CART_OPEN:
        return {
          ...state,
          isCartOpen: payload,
        };
  
      default:
        return state;
    }
  };