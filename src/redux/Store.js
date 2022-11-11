import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Cart";

 export const store = configureStore({
reducer:{
    cart:CartReducer
}
})