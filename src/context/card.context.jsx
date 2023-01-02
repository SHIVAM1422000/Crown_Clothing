import { createContext, useState } from "react";

const addCartItem = (cartItems, product) => {

    //check if item is already present then just increase it's count 
    let isPresent  = false;
    for(let i=0;i<cartItems.length;i++){
        if(cartItems[i].id===product.id){
            isPresent=true;
            cartItems[i].quantity+=1;
        }
    }
    
    if(!isPresent){
        const newArray =  [...cartItems,{...product,quantity:1}];
        return newArray
    }

    return [...cartItems];
}


export const CardContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemsToCart: () => null
});


export const CardProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    const addItemsToCart = (product) => {
        setCartItems(addCartItem(cartItems,product)); 
    }
    
    const value = { isCartOpen, setIsCartOpen, cartItems, addItemsToCart};
    return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
