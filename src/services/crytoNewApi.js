import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsApiHeaders = {
  'X-Api-Key': '120ea7f5290c4dc7926e9480cd9dc83b', 
};

const baseUrl = 'https://newsapi.org/v2';

const createRequest = (url) => ({ url, headers: newsApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(`/everything?q=${newsCategory}&pageSize=${count}&sortBy=publishedAt`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
