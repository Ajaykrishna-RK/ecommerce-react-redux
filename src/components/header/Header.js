import React from 'react'
import { useSelector } from 'react-redux'
import "./Header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
const Header = () => {
  const {cartItems} = useSelector((state)=>state.cart)





  return (
    <header>
    
    <div className='container'>
<div className='logo'>
<Link to="/"> <h2  className='shopping-cart-icon'>SHOPPING CART</h2></Link>
</div>
    
    <div className='cart'>
<div className='cart-count-header'></div>
 
<Link to="/cartpage"> <p  className='shopping-cart-icon'><HiShoppingCart/></p></Link>

</div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </header>
  )
}

export default Header