import React from 'react'
import { useSelector } from 'react-redux';
import Aftercart from './Aftercart';
import Beforecart from './Beforecart';


const CartButtons = ({product}) => {

const {cartList} = useSelector((state)=>state.cart)

const cartCount = cartList?.find((item ) => item?.id === product?.id)?.count

console.log(cartList)

console.log(cartCount,"===cart count")
    
  return (
    <> 
 
{cartCount > 0 ? <Aftercart productId={product.id}  cartCount={cartCount}/> : <Beforecart product={product}/>}

    </>
  )
}

export default CartButtons;