import { createSlice} from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


const initialState = {
cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
cartTotalCount:0,
cartTotalAmount:0
}



const cartslice =  createSlice({
name:"cart",
initialState:initialState,
reducers:{
addToCart(state,action){
 const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)

 if (itemIndex >= 0  ){
state.cartItems[itemIndex].cartCount +=1
toast.info(`increased ${state.cartItems[itemIndex].title}  quantity`)
 }
 else{
    const tempProduct = {
        ...action.payload,
        cartCount:1
    }
    state.cartItems.push(tempProduct)
    toast.success(`${action.payload.title} added to cart`)
 }
 localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

    
},
removeFromcart(state,action){
   const removeCart = state.cartItems.filter((cartItem)=>
        cartItem.id !== action.payload.id
    );
    state.cartItems = removeCart
    localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    toast.error(`${action.payload.title} remove from cart`)
},
decreaseCart(state,action){
    const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)

    if(state.cartItems[itemIndex].cartCount > 1){
        state.cartItems[itemIndex].cartCount -= 1
    }
    else if(state.cartItems[itemIndex].cartCount === 1){
        const removeCart = state.cartItems.filter((cartItem)=>
        cartItem.id !== action.payload.id
    );
    state.cartItems = removeCart
    localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    toast.error(`${action.payload.title} remove from cart`)
    }
},
increaseCart(state,action){
    const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
    state.cartItems[itemIndex].cartCount +=1
},
clearCart(state,action){
    state.cartItems = []
    toast.error("Cart cleared")
}

}
})
 
export const {addToCart,removeFromcart,decreaseCart,increaseCart,clearCart} = cartslice.actions
export default cartslice.reducer
