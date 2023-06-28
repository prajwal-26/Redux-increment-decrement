import { configureStore } from "@reduxjs/toolkit";
import index from './reducers/index'

export const store = configureStore({
    reducer:{
        incdec:index,
    }
})