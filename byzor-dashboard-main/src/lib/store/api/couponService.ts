import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/lib/axios/axiosBaseQuery";
import {
  CouponRequest,
  CouponResponse,
  CouponSingleRequest,
  CouponsResponse,
} from "@/lib/store/@types/coupon";
import { SingleRequest } from "@/lib/store/@types";

export const couponsApi = createApi({
  reducerPath: "couponsServices",
  tagTypes: ["Coupons", "id"],
  baseQuery: axiosBaseQuery({
    // @ts-ignore
  }),
  endpoints: (builder) => ({
    getAllCoupons: builder.query<CouponsResponse, void>({
      query: () => {
        return {
          url: `/coupon`,
        };
      },
      keepUnusedDataFor: 3600,
      providesTags: () => {
        return [{ type: "Coupons", id: "id" }];
      },
      transformResponse: (response: { data: CouponsResponse }) => response.data,
    }),

    getCoupon: builder.query<CouponResponse, SingleRequest>({
      query: ({ id }: SingleRequest) => {
        return {
          url: `/coupon/${id}`,
        };
      },
      keepUnusedDataFor: 3600,

      transformResponse: (response: { data: CouponResponse }) => response.data,
    }),

    createCoupon: builder.mutation<CouponResponse, CouponRequest>({
      query({ ...args }: CouponRequest) {
        return {
          url: "/coupon",
          method: "post",
          data: { ...args },
        };
      },
      invalidatesTags: ["Coupons"],
    }),

    updateCoupon: builder.mutation<CouponResponse, CouponSingleRequest>({
      query({ id, ...args }: CouponSingleRequest) {
        return {
          url: `/coupon/${id}`,
          method: "put",
          data: { ...args },
        };
      },
      invalidatesTags: ["id"],
    }),

    deleteCoupon: builder.mutation<unknown, SingleRequest>({
      query({ id }: CouponSingleRequest) {
        return {
          url: `/coupon/${id}`,
          method: "delete",
        };
      },
      invalidatesTags: ["Coupons", "id"],
    }),
  }),
});

export const {
  useGetAllCouponsQuery,
  useGetCouponQuery,
  useDeleteCouponMutation,
  useUpdateCouponMutation,
  useCreateCouponMutation,
} = couponsApi;
export default couponsApi.reducer;
