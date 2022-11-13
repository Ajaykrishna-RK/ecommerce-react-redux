import { createSlice} from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


const initialState = {
cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
cartTotalCount:0,
cartTotalAmount:0,
selectedItem:{}
}



const cartslice =  createSlice({
name:"cart",
initialState:initialState,
reducers:{

addToCart(state,action){
 const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)

 if (itemIndex >= 0  ){
state.cartItems[itemIndex].cartCount +=1
toast.info(`increased ${state.cartItems[itemIndex].title}  quantity`,{
    position: toast.POSITION.TOP_CENTER
})
 }
 else{
    const pushProduct = {
        ...action.payload,
        cartCount:1
    }
    state.cartItems.push(pushProduct)
    toast.success(`${action.payload.title} added to cart`,{
        position: toast.POSITION.TOP_CENTER
    })
 }
 localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

    
},
removeFromcart(state,action){
   const removeCart = state.cartItems.filter((cartItem)=>
        cartItem.id !== action.payload.id
    );
    state.cartItems = removeCart
    localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    toast.error(`${action.payload.title} remove from cart`,{
        position: toast.POSITION.TOP_CENTER
    })
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
    toast.error(`${action.payload.title} remove from cart`,{
        position: toast.POSITION.TOP_CENTER
    })
    }
},
increaseCart(state,action){
    const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
    state.cartItems[itemIndex].cartCount +=1
    localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
},
clearCart(state,action){
    state.cartItems = []
    localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    toast.error("Cart cleared",{
        position: toast.POSITION.TOP_CENTER
    })
},
calculateTotals(state,action){
 const {total,quantity} =  state.cartItems.reduce((cartTotal,cartItem)=>{
const {price,cartCount} =  cartItem
const itemTotal = price * cartCount

cartTotal.total += itemTotal

cartTotal.quantity += cartCount 

return cartTotal;
},
{
total:0,
quantity:0
})
state.cartTotalAmount = total
state.cartTotalCount = quantity
},


}
})
 
export const {addToCart,removeFromcart,decreaseCart,increaseCart,clearCart,calculateTotals,productDetails} = cartslice.actions
export default cartslice.reducer
