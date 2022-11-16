import React, { useEffect, useState }  from 'react'
import "./Productlist.css"
import  {  Box, CardContent,  Grid, IconButton } from '@mui/material';
import { BiDollar } from "react-icons/bi";

import { useDispatch, useSelector } from 'react-redux'

import axios from "axios" 
import Button from '../Buttons/Button';
import { addToCart } from '../../redux/Cart';
import { Link } from 'react-router-dom';

// import Button from '@mui/material/Button';

// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, Icon, Image } from 'semantic-ui-react'
import { apiDatas } from '../../redux/Fetchapi';
import { AiFillStar } from "react-icons/ai";

// link style
const linkStyle = {
  textDecoration:"none",
  color:"#111"

}



const Productlist = () => {




const dispatch = useDispatch()

const {apiData,loading} = useSelector((state)=>state.api)






useEffect(()=>{
dispatch(apiDatas())


},[])



const handleAddToCart = (product)=>{
dispatch(addToCart(product))
}













  return (
    <div  style={{marginTop:"170px"}}>
   
   
 
   <div className='product-card-main-div'>
     <div> {loading && <h1>loading.....</h1>}</div>
     <Grid container spacing={4}>
{apiData.map((product,key)=>(

  <Grid item  xs={12} sm={6} md={3}  key={product.id}>



<Card  id="product-card" >
     
<Link to={`/product/${product.id}`} style={linkStyle}>
  <div>

  
  <img
  className='product-image'
  src={product.image}
  alt=""
  />
   
   </div>

  <CardContent>
    <div className='card-content'>
  <p>{product.category}</p>
  <p className='product-title'>  {`${product.title.slice(0,18)}`}...</p>
 
   <p>price: <BiDollar/> {product.price} </p>
  
   </div>

   <Button  className="rating-button">{product.rating.rate} <AiFillStar/></Button> 
  </CardContent>
  </Link>
 
  <CardActions>


<Button className="add-to-cart" onClick={()=>handleAddToCart(product)}> Add to cart </Button>


  </CardActions>
</Card>  
  
</Grid>

))}

</Grid>    

</div> 
  



</div>
  )
}

export default Productlist