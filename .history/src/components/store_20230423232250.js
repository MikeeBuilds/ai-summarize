/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "../services/article";


export default configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(articleApi)
});