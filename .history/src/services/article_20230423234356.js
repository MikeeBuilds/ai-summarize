/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';




export const articleApi = createApi({
    reducerPath: 'articleApi',
    base
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => 'test',
        })
    })
});