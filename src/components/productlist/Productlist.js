import React, { useEffect, useState }  from 'react'
import "./Productlist.css"
import  {Card,  CardContent,  Grid } from '@mui/material';
import { BiDollar } from "react-icons/bi";

import { useDispatch, useSelector } from 'react-redux'

import axios from "axios" 
import Button from '../Buttons/Button';
import { addToCart } from '../../redux/Cart';
import { Link } from 'react-router-dom';



const baseURL = "https://fakestoreapi.com/products";


const Productlist = () => {

const dispatch = useDispatch()

const {cartDetails} = useSelector((state)=>state.cart)

console.log(cartDetails)



const handleAddToCart = (product)=>{
dispatch(addToCart(product))
}



const [loading, setLoading] = useState(false)

const [data, setData] = useState([])

useEffect(()=>{
  setLoading(true)
  axios({
    method:"GET",
    url:baseURL,
  })
.then((res)=>{
  
  setData(res.data)

})
.catch((err)=>{
  console.log(err)
})
.finally(()=>{
  setLoading(false)
})
},[])






  return (
    <div >
  
 
    <div className='product-card-main-div'>
     <div>{loading && <h1>Loading.....</h1>}</div>
     <Grid container spacing={5}>
{data.map((product)=>(

  <Grid item  xs={12} sm={6} md={4}>

  <Card  id="product-card" >
    <Link to={`/productdetials/${product.id}`}  >
  <img
  className='product-image'
  src={product.image}
  alt=""
  />
  </Link>
  <CardContent>
  <h3>  {product.title}</h3>
   <div>
   <p>price: <BiDollar/> {product.price} </p>
   </div>


  </CardContent>
  <div className='add-to-cart-main'>

<Button className="add-to-cart" onClick={()=>handleAddToCart(product)}> Add to cart </Button>

  </div>
 
</Card>  

</Grid>

))}

</Grid>    
     
</div>
  
</div>
  )
}

export default Productlist