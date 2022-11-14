import React, { useEffect, useState }  from 'react'
import "./Productlist.css"
import  {  CardContent,  Grid } from '@mui/material';
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


const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};






  return (
    <div >
  



 
    <div className='product-card-main-div'>
     <div>{loading && <h1>Loading.....</h1>}</div>
     <Grid container spacing={5}>
{data.map((product)=>(

  <Grid item  xs={12} sm={6} md={4}>

<Card  id="product-card">
<img
  className='product-image'
  src={product.image}
  alt=""
  />

    <Card.Content>
    <h3>  {product.title}</h3>
 
      <Card.Description>
    
 
      </Card.Description>
    </Card.Content>
    <div>
   <p>price: <BiDollar/> {product.price} </p>
   </div>

    <Card.Content extra>

  
  
        <Button className="add-to-cart" onClick={()=>handleAddToCart(product)}> Add to cart </Button>
   
    </Card.Content>
  </Card>

</Grid>

))}

</Grid>    
     
</div>
  



</div>
  )
}

export default Productlist