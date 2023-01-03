import './checkout-item.styles.scss'
import { CardContext } from '../../context/card.context';
import React from 'react'
import { useContext } from 'react';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const {removeItemFromCheckout} = useContext(CardContext);
    const removeButtonHandler = () => {
         removeItemFromCheckout(cartItem)
    }
  return (
    <div className='checkout-item-container'>
        <div className="image-container">
            <img src={imageUrl} alt={`${name}`}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={removeButtonHandler}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem