import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice"
import userReducer from './userSlice';



export const myStore = configureStore({
    reducer: {
        
        auth: authReducer,
        user: userReducer
    }
})