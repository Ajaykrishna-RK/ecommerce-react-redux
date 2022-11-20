import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"



export const apiDatas = createAsyncThunk("api/ apiDatas",async () =>{
    const response = await axios.get("https://fakestoreapi.com/products")
  
    return response.data
})

export const selectedProductApi = createAsyncThunk("api/selectedProduct",async (id) =>{
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return response.data
})



const initialState = {
    loading:false,
apiData:[],
selectProduct:{}
}

const apiSlice = createSlice({
    name:"api",
    initialState:initialState,

    reducers:{
        removeSelectedProduct(state,action){
    state.selectProduct = {}
}
    },
   
extraReducers:{
    [apiDatas.pending]:(state,action)=>{
        state.loading = true
    },
    [apiDatas.fulfilled]:(state,action)=>{
        state.loading = false
        state.apiData = action.payload
    },
    [apiDatas.rejected]:(state,action)=>{
        state.loading = false
        
    },
    // for selected product
    [selectedProductApi.pending]:(state,action)=>{
        state.loading = true
    },

    [selectedProductApi.fulfilled]:(state,action)=>{
        state.loading = false
        state.selectProduct = action.payload
    },
    
}
    
})

export const {removeSelectedProduct} =  apiSlice.actions

export default apiSlice.reducer