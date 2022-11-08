import React from 'react'
import "./CartButtons.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/Cart';

const Beforecart = ({product}) => {

  const dispatch = useDispatch()

  return (
    <div>
  <div className="before-cart">
         <button className="add-cart-button" onClick={()=>dispatch(addToCart(product))} >
            Add to cart
         </button>
      </div>
    </div>
  )
}

export default Beforecart