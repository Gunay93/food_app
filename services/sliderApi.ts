import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sliderApi = createApi({
  reducerPath: 'sliderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://10.20.28.103:8000/api/slider/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts'
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost
      })
    })
  })
});

export const { useGetPostsQuery, useAddPostMutation } = sliderApi;
