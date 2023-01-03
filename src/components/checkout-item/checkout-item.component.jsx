import "./checkout-item.styles.scss";
import { CardContext } from "../../context/card.context";
import React from "react";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemFromCheckout, addItemsToCart, removeItemsFromCart } =
    useContext(CardContext);

  const incrementButtonHandler = () => {
    addItemsToCart(cartItem);
  };

  const decrementButtonHandler = () => {
    removeItemsFromCart(cartItem);
  };

  const removeButtonHandler = () => {
    removeItemFromCheckout(cartItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementButtonHandler}>
          &#10094;{" "}
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementButtonHandler}>
          &#10095;{" "}
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeButtonHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
