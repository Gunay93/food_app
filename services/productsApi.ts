import { apiSlice } from './apiSlice'

export interface Product {
  restaurantID: number
  restaurantName: string
  address: string
  type: string
}
export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
  }),
  overrideExisting: false,
})
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
} = productsApi