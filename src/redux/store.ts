import { configureStore } from "@reduxjs/toolkit" 
import { apiSlice } from "./apiSlice"
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware,logger),

    devTools: true
})