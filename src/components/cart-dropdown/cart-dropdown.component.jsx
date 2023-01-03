import React from "react";
import Button from "../buttons/button.component";
import "./cart-dropdown.styles.scss";
import "./cart.style.scss";
import { CardContext } from "../../context/card.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";


const CartDropdown = () => {
  const {cartItems} = useContext(CardContext);
   const navigate = useNavigate();

   const goToCheckoutHandler = () => {
        navigate('/checkout')
   }
   
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) =>(
            <CartItem key={item.id} product={item}/>
          ))
        ) : (
          <h1>Your Cart Is Empty</h1>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
