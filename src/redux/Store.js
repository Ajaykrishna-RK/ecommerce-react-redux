import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Cart";
import apiReducer from "./Fetchapi";

 export const store = configureStore({
reducer:{
    cart:CartReducer,
    api:apiReducer

}
})