import React from "react";
import { useContext } from "react";
import CheckoutItem from "../checkout-item/checkout-item.component";
import './checkout.styles.scss'
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store /cart/cart.selector';


const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

  return (

    <div className="checkout-container">
        <div className="checkout-header">
            <div className="header-block"><span>Product</span></div>
            <div className="header-block"><span>Description</span></div>
            <div className="header-block"><span>Quantity</span></div>
            <div className="header-block"><span>Price</span></div>
            <div className="header-block"><span>Remove</span></div>
        </div>
    
      {cartItems.map((item) => {
        const { id, name, quantity } = item;
        return (
          <CheckoutItem key={id} cartItem={item}></CheckoutItem>
        );
      })}
      <span className="total">{`Total: ${totalPrice}`}</span>
 </div>
  );
};

export default Checkout;
