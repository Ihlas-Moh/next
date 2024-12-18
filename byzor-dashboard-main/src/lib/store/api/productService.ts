import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/lib/axios/axiosBaseQuery";
import {
  ProductRequest,
  ProductResponse,
  ProductSingleRequest,
  ProductsResponse,
} from "@/lib/store/@types/product";
import { SingleRequest } from "@/lib/store/@types";

export const productsApi = createApi({
  reducerPath: "productsServices",
  tagTypes: ["Products", "id"],
  baseQuery: axiosBaseQuery({
    // @ts-ignore
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductsResponse, void>({
      query: () => {
        return {
          url: `/product`,
        };
      },
      keepUnusedDataFor: 3600,
      providesTags: () => {
        return [{ type: "Products", id: "id" }];
      },
      transformResponse: (response: { data: ProductsResponse }) =>
        response.data,
    }),

    getProduct: builder.query<ProductResponse, SingleRequest>({
      query: ({ id }: SingleRequest) => {
        return {
          url: `/product/${id}`,
        };
      },
      keepUnusedDataFor: 3600,

      transformResponse: (response: { data: ProductResponse }) => response.data,
    }),

    createProduct: builder.mutation<ProductResponse, ProductRequest>({
      query({ ...args }: ProductRequest) {
        return {
          url: "/product",
          method: "post",
          data: { ...args },
        };
      },
      invalidatesTags: ["Products"],
    }),

    updateProduct: builder.mutation<ProductResponse, ProductSingleRequest>({
      query({ id, ...args }: ProductSingleRequest) {
        return {
          url: `/product/${id}`,
          method: "put",
          data: { ...args },
        };
      },
      invalidatesTags: ["id"],
    }),

    deleteProduct: builder.mutation<unknown, SingleRequest>({
      query({ id }: ProductSingleRequest) {
        return {
          url: `/product/${id}`,
          method: "delete",
        };
      },
      invalidatesTags: ["Products", "id"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useCreateProductMutation,
} = productsApi;
export default productsApi.reducer;
