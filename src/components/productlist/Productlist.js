import React, { useEffect }  from 'react'
import "./Productlist.css"
import  {   CardContent,  Grid, CircularProgress, Card } from '@mui/material';

import { BiDollar } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux'
import { AiFillStar } from "react-icons/ai";
import CardActions from '@mui/material/CardActions';

import Button from '../Buttons/Button';
import { addToCart } from '../../redux/Cart';
import { Link } from 'react-router-dom';
import { apiDatas } from '../../redux/Fetchapi';

import Banner from '../banner/Banner';



// link style
const linkStyle = {
  textDecoration:"none",
  color:"#111"

}
// margin style
const margin = {
  marginTop:"100px"

}


const Productlist = () => {




const dispatch = useDispatch()

const {apiData,loading} = useSelector((state)=>state.api)






useEffect(()=>{
dispatch(apiDatas())


},[dispatch])



const handleAddToCart = (product)=>{
dispatch(addToCart(product))
}


 






  
  



  return (
   
    <div  >
   <Banner/>


   <div
   
   className='product-card-main-div'  >

     <div className='loading-circle'> {loading && <CircularProgress />}</div>
     <Grid container spacing={4}>
{apiData.map((product,key)=>(

  <Grid item  xs={12} sm={6} md={3}  key={product.id}>

<div >

<Card  id="product-card">
     
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
</div>
</Grid>

))}

</Grid>    

</div> 
  



</div>
  )
}

export default Productlist