import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = '/api'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
})

export type ApiSlice = typeof apiSlice