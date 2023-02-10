import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useSelector } from 'react-redux';
import { selectIsCartOpen, selectCartCount } from "../../store /cart/cart.selector";
import { useDispatch } from 'react-redux';
import { setIsCartOpenActionCreator } from '../../store /cart/cart.action';

const CartIcon = () => {
  const dispatch = useDispatch()
  const isCartOpen=useSelector(selectIsCartOpen)
  const totalItems = useSelector(selectCartCount)
  const toggleSetCart = () => dispatch(setIsCartOpenActionCreator(!isCartOpen))


  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleSetCart} />
      <span className="item-count">{totalItems}</span>
    </div>
  );
};

export default CartIcon;
