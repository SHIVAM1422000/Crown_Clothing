import { createContext, useState, useEffect } from "react";

// helper function to add a new item
const addCartItem = (cartItems, product) => {
  let isPresent = false;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === product.id) {
      isPresent = true;
      cartItems[i].quantity += 1;
    }
  }

  if (!isPresent) {
    const newArray = [...cartItems, { ...product, quantity: 1 }];
    return newArray;
  }

  return [...cartItems];
};

//helper function to remove a cart item
const removeCartItem = (cartItems, product) => {
  const isPresent = cartItems.find((item) => item.id === product.id);
  const newArray = cartItems.filter((item) => item.id !== product.id);
  if (isPresent.quantity > 1) {
    const temp = [
      ...newArray,
      { ...product, quantity: isPresent.quantity - 1 },
    ];
    return temp;
  }

  return newArray;
};

// helper function to remove a checkout item
const removeCheckoutItem = (cartItems, product) => {
    const newArray = cartItems.filter((item) => item.id !== product.id);
    return newArray;
}

export const CardContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemsToCart: () => null,
  removeItemsFromCart: () => null,
  totalItems: 0,
  setTotalItems: () => null,
  removeItemFromCheckout: () => null,
  totalPrice: 0,
  setTotalPrice: () => null
});

export const CardProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // to get total quantity changes
  useEffect(() => {
    const total_items = cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );
    setTotalItems(total_items);
  },[cartItems]);

  // to get total price changes
  useEffect(()=>{
    const total_cost= cartItems.reduce((total, currentItem)=> total + (currentItem.price * currentItem.quantity) ,0);
    setTotalPrice(total_cost);
  },[cartItems]);

  const addItemsToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const removeItemsFromCart = (product) => {
    setCartItems(removeCartItem(cartItems, product));
  };

  const removeItemFromCheckout = (product) => {
    setCartItems(removeCheckoutItem(cartItems, product));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    totalItems,
    removeItemsFromCart,
    removeItemFromCheckout,
    totalPrice,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
