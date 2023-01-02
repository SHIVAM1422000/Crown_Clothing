import React from 'react'
import Button from '../buttons/button.component'
import './cart-dropdown.styles.scss'
import './cart.style.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>0</div>
        <Button>CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown