import { Card, CardActions, CardContent, CardMedia, Grid, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

import {Link } from "react-router-dom";
import {Table} from 'react-bootstrap'

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
  width:600
    
}

const totalAmountCard ={
marginTop:20,

}





const Cartpage = () => {
  const {cartItems} = useSelector((state)=>state.cart)
  const {cartTotalCount} = useSelector((state)=>state.cart)
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
  

<Grid item xs={12} sm={12} md={9}>
<div className='cart-page-main-div'>
<div class="header_fixed" >
        <table>
            <thead>
                <tr>
                    
                    <th>Image</th>
                    <th>title</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {cartItems.map((item,key)=>(
                <tr>
                  
                    <td className='cart-page-image-main'><img className='cart-page-image' src={item.image} /></td>
                    <td className='cart-page-text'>{`${item.title.slice(0,25)}`}...</td>
                    <td className='cart-page-price'>{item.price * item.cartCount}</td>
                    <td>
                      <div className='quantity-main-div'>
                    <Button  className="inc-dec-button"  onClick={()=>handleDecrease(item)}>-</Button>
        <div className='count'> <p> <span className='counting'>{item.cartCount}</span> </p></div>
<Button className="inc-dec-button" onClick={()=>handleIncrease(item)}>+</Button>
</div>
                    </td>
                    <td>
                    <Button className="cart-page-remove" onClick={()=>handleRemove(item)}>remove</Button>                   
    


                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  
    </div>
    </Grid>


      <Grid item xs={12} sm={12} md={3}>

      <div className='total-amount-div-main'>
      <div class="uk-card uk-card-default uk-card-body ">

    <div className="total-main">
  
        <p className='total-items'> Total items : ({cartItems.length})</p>
        <p className='total-price'>Total:      <BiDollar/>  {cartTotalAmount}</p>
        
        </div>
        <div className="clear-cart">
        <Button className="clear-cart-button" onClick={()=>handleClear()}>clearCart</Button>

        <Button className="check-cart-button" >checkout</Button>
        </div>
</div>

</div>

        {/* <div className='total-amount-div-main' style={{marginTop:"150px"}}>
          <Card>
        <div style={totalAmountCard}>
       
      
     
       
        </div>
      
   
    

   
        </div>
        <div className="clear-cart">
        <Button className="clear-cart-button" onClick={()=>handleClear()}>clearCart</Button>
        </div>
  
        </div> */}
        

      </Grid>
    </Grid>

  </div>
)}


</div>










    </>
   

  )
}

export default Cartpage