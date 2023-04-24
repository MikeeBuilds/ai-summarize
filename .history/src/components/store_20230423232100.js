import { configureStore } from "@reduxjs/toolkit";

import 


export default configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat()
});