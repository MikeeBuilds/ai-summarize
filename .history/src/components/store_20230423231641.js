import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";




export default configureStore({
    reducer: {
        // Add your reducers here

    },
    middleware: (getDefaultMiddleware)
});