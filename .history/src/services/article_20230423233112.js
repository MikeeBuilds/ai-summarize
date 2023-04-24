/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';




export const articleApi = createApi({
    reducerPath: 'articleApi',
    endpoints: (builder) => ({
    get: builder.query({
            query: (params) => 'test',
        })
    })
});