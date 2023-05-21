import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "../features/counter/counter"
import themeSliceReducer from "../features/theme/themeSlice";
import { apiSlice } from "../features/api/apiSlice";
import userSliceReducer from "../features/user/userSlice"

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        counter: counterSliceReducer,
        theme:themeSliceReducer,
        user:userSliceReducer,
    },
    middleware: (getDefaultMiddlewares)=> getDefaultMiddlewares().concat(apiSlice.middleware)
})

export default store;