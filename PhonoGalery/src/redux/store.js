import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { slice } from "./reducer";


const rootReducer = combineReducers({
    [slice.name]: slice.reducer,
})
  
export const store = configureStore({
    reducer: rootReducer
})