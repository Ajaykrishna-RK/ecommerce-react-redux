import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Header.css"

import {Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { AppBar } from '@mui/material';
import { calculateTotals } from '../../redux/Cart';
import { Input, Menu } from 'semantic-ui-react'
import Dropdown from './dropdown/Dropdown';
const Header = () => {


  const {cartItems} = useSelector((state)=>state.cart)

  const {cartTotalCount} = useSelector((state)=>state.cart)


const dispatch= useDispatch()

useEffect(()=>{
  dispatch(calculateTotals())
},[cartItems])



const appbar={
backgroundColor:"#fff",


}


  return (
    <div>
    <header>

    <AppBar  sx={appbar}>
     
    <div className='container'>
<div className='logo'>
<Link to="/"> <h2  className='shopping-cart-text'>SHOPPING CART</h2></Link>
</div>

   

    
    <div className='cart'>
<div className='cart-count-header'>{cartTotalCount}</div>
 
<Link to="/cartpage"> <p  className='shopping-cart-icon'><HiShoppingCart/></p></Link>

</div>
    </div>
    
    
    
    
   
    
    
    
    
    
    
    
    
    </AppBar>
    
    </header>
    
     </div>
  )
}

export default Header