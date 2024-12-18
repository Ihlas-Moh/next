import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/lib/axios/axiosBaseQuery";
import {
  StoreRequest,
  StoreResponse,
  StoreSingleRequest,
  StoresResponse,
} from "@/lib/store/@types/store";
import { SingleRequest } from "@/lib/store/@types";

export const storesApi = createApi({
  reducerPath: "storesServices",
  tagTypes: ["Stores", "id"],
  baseQuery: axiosBaseQuery({
    // @ts-ignore
  }),
  endpoints: (builder) => ({
    getAllStores: builder.query<StoresResponse, void>({
      query: () => {
        return {
          url: `/store`,
        };
      },
      keepUnusedDataFor: 3600,
      providesTags: () => {
        return [{ type: "Stores", id: "_id" }];
      },
      transformResponse: (response: { data: StoresResponse }) => response.data,
    }),

    getStore: builder.query<StoreResponse, SingleRequest>({
      query: ({ id }: SingleRequest) => {
        return {
          url: `/store/${id}`,
        };
      },
      keepUnusedDataFor: 3600,
      providesTags: () => {
        return [{ type: "Stores", id: "_id" }];
      },
      transformResponse: (response: { data: StoreResponse }) => response.data,
    }),

    createStore: builder.mutation<StoreResponse, StoreRequest>({
      query(args: StoreRequest) {
        return {
          url: "/store",
          method: "post",
          data: { ...args },
        };
      },
      invalidatesTags: ["Stores"],
    }),

    updateStore: builder.mutation<StoreResponse, StoreSingleRequest>({
      query({ id, ...args }: StoreSingleRequest) {
        return {
          url: `/store/${id}`,
          method: "put",
          data: { ...args },
        };
      },
      invalidatesTags: ["id"],
    }),

    deleteStore: builder.mutation<unknown, string>({
      query(id: string) {
        return {
          url: `/store/${id}`,
          method: "delete",
        };
      },

      invalidatesTags: ["Stores", "id"],
    }),
  }),
});

export const {
  useGetAllStoresQuery,
  useGetStoreQuery,
  useDeleteStoreMutation,
  useUpdateStoreMutation,
  useCreateStoreMutation,
} = storesApi;
export default storesApi.reducer;
