import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "../features/counter/counter"

const store = configureStore({
    reducer:{
        counter: counterSliceReducer,
    },
    middleware: (getDefaultMiddlewares)=> getDefaultMiddlewares()
})

export default store;