import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {selectedProductApi}  from "../../redux/Fetchapi"
import { removeSelectedProduct } from '../../redux/Fetchapi'
import  {   Grid  } from '@mui/material';
import { BiDollar } from "react-icons/bi";
import "./Productdetail.css"
import Button from '../Buttons/Button'
import { AiFillStar } from "react-icons/ai";
import { addToCart } from '../../redux/Cart'



// price bold style

const bold = {
fontWeight:"bold"
}

const Productdetail = () => {

const {id} = useParams()

    const {selectProduct,loading} = useSelector((state)=>state.api)

const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(selectedProductApi(id))
        
        return ()=>{
          dispatch(removeSelectedProduct())
        }
        
        },[dispatch,id])


        const handleAddToCart = (product)=>{
          dispatch(addToCart(product))
          }

  return (
    <div style={{marginTop:"200px"}}>
<div>{loading && <h1>Loading.....</h1>}</div>

<Grid container>


<Grid item xs={12} sm={12} md={6}>

<div>
  <img className='product-detail-img' src={selectProduct.image} alt=""></img>
</div>

</Grid>


<Grid item xs={12} sm={12} md={6}>

<div>
  <p>{selectProduct.category}</p>
 <h2>{selectProduct.title}</h2>

</div>
<div>

</div>
<div>
<h3>Price : <span style={bold}><BiDollar/>{selectProduct.price}</span> </h3>
</div>
<div>
 <p>{selectProduct.description}</p>
</div>

<div className='product-detail-buttons'>
<Link to="/"><Button className="product-detail-continue-shopping"> Continue Shopping </Button></Link>
<Button className="product-detail-add-to-cart" onClick={()=>handleAddToCart(selectProduct)}> Add to cart </Button>
</div>

</Grid>


</Grid>



    
    </div>
  )
}

export default Productdetail