import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"



 

const initialState = {
cartList:[],
cartCount:0,
userDetail:[]
}


const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addUser:(state,action)=>{
            state.userDetail.push(action.payload)
        },
        addToCart:(state,action)=>{
            const itemExist = state.cartList.find((item) => item.id === action.payload.id)
            if(itemExist){
                state.cartList.forEach((item) => {
                    if(item?.id === action.payload.id){
                        item.count = 1
                    }else{
                        
                    }
                  })
                  return;
            }
            state.cartList.push({
                ...action.payload,
                count:1
            })


        },
        increment:(state,action)=>{
           const productId = action.payload
          state.cartList.forEach((item)=>{
            if(item?.id === productId){
                item.count ++
            }
          })
        },
        decrement:(state,action)=>{
            const productId = action.payload
          state.cartList.forEach((item)=>{
            if(item?.id === productId){
                item.count --
            }
          })
        }
    },
  
})

export const {addToCart,increment,decrement,addUser} = cartSlice.actions

export default cartSlice.reducer;