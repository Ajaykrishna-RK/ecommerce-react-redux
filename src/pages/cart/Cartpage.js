import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import {Link } from "react-router-dom";

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiDollar } from "react-icons/bi";
import "./Cartpage.css"

import Button from '../../components/Buttons/Button';
import { removeFromcart ,decreaseCart,increaseCart,clearCart, totalAmount, calculateTotals} from '../../redux/Cart';

const cartStyle = {
    display:"flex"
}


const Cartpage = () => {
  const {cartItems} = useSelector((state)=>state.cart)

  const {cartTotalAmount} =  useSelector((state)=>state.cart)
  
const dispatch= useDispatch()

useEffect(()=>{
  dispatch(calculateTotals())
},[cartItems])

const handleRemove = (item) =>{
dispatch(removeFromcart(item))
}

const handleDecrease = (item) =>{
  dispatch(decreaseCart(item))
  }
  const handleIncrease = (item) =>{
    dispatch(increaseCart(item))
    }
    const handleClear = () =>{
      dispatch(clearCart())
      }
   
  return (
    <>
    

<div>
{cartItems.length === 0 ? (

    <div className='empty-cart'>
      <ul>
     <li><p>Cart is empty  </p></li> 
      
     
     <Link to="/" ><small>Continue Shopping</small></Link>  
      </ul>
        
    </div>


):(
  <div>
    <Grid container>
      <Grid item xs={12}>
        <div className="clear-cart">
        <Button >clearCart</Button>
        </div>

      </Grid>
    </Grid>
    <Grid container >
  
    {cartItems.map((item,key)=>(



<Grid item  xs={12} key={item.id} >

<div className='cart-page-main'>

<div className='cart-page-main-div' >
<Card sx={cartStyle}>
    <img src={item.image} className="cart-page-image" alt="" srcset="" />
  
    
        <div className='cart-page-text'>
     
        <h4 >
            {item.title}
          </h4>
          <p >
            {item.category}
          </p>
          <div className='total-price'>
          <p >
            <BiDollar/>  {item.price * item.cartCount}
          </p>
          </div>
        </div>
  
        <CardActions>
        
        <Button  className="inc-dec-button"  onClick={()=>handleDecrease(item)}>-</Button>
        <div className='count'> <p>Quantity: <span className='counting'>{item.cartCount}</span> </p></div>
<Button className="inc-dec-button" onClick={()=>handleIncrease(item)}>+</Button>
       
<Button className="cart-page-remove" onClick={()=>handleRemove(item)}>Remove</Button>

      </CardActions>
    
     
     <div>

     </div>
    </Card>
    </div>

</div>

</Grid>

))}

<div className='total-amount-div'>
  
<p> Total <BiDollar/> {cartTotalAmount} </p>
</div>
</Grid>

<Grid container>
      <Grid item xs={12}>
        <div className="clear-cart">
        <Button className="clear-cart-button" onClick={()=>handleClear()}>clearCart</Button>
        </div>

      </Grid>
    </Grid>
  </div>
)}


</div>








    </>
   

  )
}

export default Cartpage