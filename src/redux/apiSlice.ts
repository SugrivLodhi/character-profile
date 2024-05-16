import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../services/apiService";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    fetchLocation: builder.query({
      query: () => `location`,
      keepUnusedDataFor: 60, 
    }),
    fetchLocationByname: builder.query({
      query: (params) => `/location/${params}`,
      keepUnusedDataFor: 60, 
    }),
    fetchEpisode: builder.query({
      query: () => `episode`,
      keepUnusedDataFor: 60, 
    }),
    fetchEpisodeByName: builder.query({
      query: (params) => `/episode/${params}`,
      keepUnusedDataFor: 60, 
    }),
    fetchSingleCharater: builder.query({
      query: (id) => `/character/${id}`,
      keepUnusedDataFor: 60, 
    })
  }),
});

export const {
  useFetchEpisodeQuery,
  useFetchLocationQuery,
  useFetchEpisodeByNameQuery,
  useFetchLocationBynameQuery,
  useFetchSingleCharaterQuery,
} = apiSlice;
