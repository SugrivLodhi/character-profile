import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../services/apiService";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    fetchLocation: builder.query({
      query: () => `location`,
    }),
    fetchLocationByname: builder.query({
      query: (params) => `/location/${params}`,
    }),
    fetchEpisode: builder.query({
      query: () => `episode`,
    }),
    fetchEpisodeByName: builder.query({
      query: (params) => `/episode/${params}`,
    }),
    fetchSingleCharater: builder.query({
      query: (id) => `/character/${id}`
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
