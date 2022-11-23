import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import {Link } from "react-router-dom";

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiDollar } from "react-icons/bi";
import { BsTrash } from "react-icons/bs"
import "./Cartpage.css"

import Button from '../../components/Buttons/Button';
import { removeFromcart ,decreaseCart,increaseCart,clearCart, totalAmount, calculateTotals} from '../../redux/Cart';
import { width } from '@mui/system';

const cartStyle = {
    display:"flex",
    
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
    

<Grid container spacing={2}>
  
    {cartItems.map((item,key)=>(



<Grid item xs={12} md={6} >

<div className='cart-page-main'>

<div className='cart-page-main-div' >
<Card style={cartStyle}>

  <div className='cart-page-image-main'>
    <img src={item.image} className="cart-page-image" alt="" srcset="" />
   
    </div>
    
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
  
        <CardActions >
      
        <Button  className="inc-dec-button"  onClick={()=>handleDecrease(item)}>-</Button>
        <div className='count'> <p>Quantity: <span className='counting'>{item.cartCount}</span> </p></div>
<Button className="inc-dec-button" onClick={()=>handleIncrease(item)}>+</Button>



      </CardActions>
      <CardActions id='buy-delete-actions'>
        
      <Button className="cart-page-buy" onClick={()=>handleRemove(item)}>Buynow</Button>

      </CardActions>

      <Button className="cart-page-remove" onClick={()=>handleRemove(item)}><BsTrash/></Button>
     
     <div>

     </div>
    </Card>
    </div>

</div>

</Grid>



))}

<Grid item sm={6}>

<div className='total-amount-div'>
  
<p> Total <BiDollar/> {cartTotalAmount} </p>
</div>
</Grid>
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