import "./checkout-item.styles.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store /cart/cart.selector";
import {
  addItemsToCartActionCreator,
  removeItemsFromCartUtilityActionCreator,
  removeItemFromCheckoutUtilityActionCreator,
} from "../../store /cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const incrementButtonHandler = () => {
    return dispatch(addItemsToCartActionCreator(cartItems, cartItem));
  };

  const decrementButtonHandler = () => {
    return dispatch(
      removeItemsFromCartUtilityActionCreator(cartItems, cartItem)
    );
  };

  const removeButtonHandler = () => {
    return dispatch(
      removeItemFromCheckoutUtilityActionCreator(cartItems, cartItem)
    );
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
