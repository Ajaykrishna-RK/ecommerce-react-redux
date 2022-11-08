import React from 'react'
import { useSelector } from 'react-redux'
import "./Header.css"


const Header = () => {
  const {cartList} = useSelector((state)=>state.cart)

const totalCartCount = cartList.reduce((acc,value)=>(acc += value.count),0)



  return (
    <header>
    
    <div className='container'>

    <h1>LOGO</h1>
    <div className='.right-section'>
<div className='cart-count-header'>{totalCartCount}</div>
  <h1>CART</h1>

</div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </header>
  )
}

export default Header