/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
      url: 'https://time.com/6266679/musk-ai-open-letter/',
      length: '3'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '8a34786708mshbd14536c5d6e1d4p1337fbjsnb0b0919ec98a',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };


export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers, { getState }) => {
            headers.set('')
        }
     }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => 'test',
        })
    })
});