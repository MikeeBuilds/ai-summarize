/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';




export const articleApi = createApi({
    reducerPath: 'articleApi',
    endpoints: (builder) => ({
        getsUMMARY: builder.query({
            query: (par) => 'test',
        })
    })
});