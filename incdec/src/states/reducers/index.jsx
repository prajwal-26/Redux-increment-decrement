// Import the configureStore API from Redux Toolkit. 
// We'll start by creating an empty Redux store, 
// and exporting it:


// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {},
// })
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value:100,
}
export const incdecSlice = createSlice({
name :'incdec',
// The initial state that should be used when the reducer
//  is called the first time. This may also be a 
//  "lazy initializer" function, which should return an initial
//   state value when called. This will be used whenever the
//    reducer is called with undefined as its state value, and is primarily useful
//  for cases like reading initial state from localStorage.
initialState,
reducers:{
    Inc:(state) =>{
 state.value += 1;
    },
    Dec:(state) =>{
     state.value -= 1;
            }
    
    
}

})
export const {Inc,Dec} = incdecSlice.actions;
export default incdecSlice.reducer;