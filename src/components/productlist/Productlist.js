import React  from 'react'
import "./Productlist.css"

import products from "../api/products.json"
import Beforecart from './cartbutons/Beforecart'
import Aftercart from './cartbutons/Aftercart'
import { useSelector } from 'react-redux'
import CartButtons from './cartbutons'

const Productlist = () => {
const {cartList} = useSelector((state)=>state.cart)


  return (
    <section className='container'>

{products.map((product,key)=>(
  <div className='product-container' key={key}>
 <img src={product?.image} alt="" srcset="" />
  <h3>{product?.title}</h3>
<CartButtons product = {product}/> 

  </div>

 
))}

    </section>
  )
}

export default Productlist