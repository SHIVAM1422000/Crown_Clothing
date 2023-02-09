import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";


// Setting Up Redux File
import { useDispatch,useSelector } from 'react-redux';
import { selectCartTotal, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";


const CartIcon = () => {

  const dispatch = useDispatch()


  // const { isCartOpen, setIsCartOpen, totalItems} = useContext(CardContext);
  const isCartOpen = useSelector(selectIsCartOpen)
  const totalItems = useSelector(selectCartTotal)
  const toggleSetCart = () => {
     dispatch(setIsCartOpen(!isCartOpen))
  };

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleSetCart} />
      <span className="item-count">{totalItems}</span>
    </div>
  );
};

export default CartIcon;
