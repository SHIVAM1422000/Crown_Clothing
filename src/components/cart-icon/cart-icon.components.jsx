import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CardContext } from "../../context/card.context";


const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalItems} = useContext(CardContext);
  const toggleSetCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleSetCart} />
      <span className="item-count">{totalItems}</span>
    </div>
  );
};

export default CartIcon;
