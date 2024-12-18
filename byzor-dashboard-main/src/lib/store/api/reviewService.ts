import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/lib/axios/axiosBaseQuery";
import {
  ReviewRequest,
  ReviewResponse,
  ReviewSingleRequest,
  ReviewsResponse,
} from "@/lib/store/@types/review";
import { SingleRequest } from "@/lib/store/@types";

export const reviewsApi = createApi({
  reducerPath: "reviewsServices",
  tagTypes: ["Reviews", "id"],
  baseQuery: axiosBaseQuery({
    // @ts-ignore
  }),
  endpoints: (builder) => ({
    getAllReviews: builder.query<ReviewsResponse, void>({
      query: () => {
        return {
          url: `/review`,
        };
      },
      keepUnusedDataFor: 3600,
      providesTags: () => {
        return [{ type: "Reviews", id: "id" }];
      },
      transformResponse: (response: { data: ReviewsResponse }) => response.data,
    }),

    getReview: builder.query<ReviewResponse, SingleRequest>({
      query: ({ id }: SingleRequest) => {
        return {
          url: `/review/${id}`,
        };
      },
      keepUnusedDataFor: 3600,

      transformResponse: (response: { data: ReviewResponse }) => response.data,
    }),

    createReview: builder.mutation<ReviewResponse, ReviewRequest>({
      query({ ...args }: ReviewRequest) {
        return {
          url: "/review",
          method: "post",
          data: { ...args },
        };
      },
      invalidatesTags: ["Reviews"],
    }),

    updateReview: builder.mutation<ReviewResponse, ReviewSingleRequest>({
      query({ id, ...args }: ReviewSingleRequest) {
        return {
          url: `/review/${id}`,
          method: "put",
          data: { ...args },
        };
      },
      invalidatesTags: ["id"],
    }),

    deleteReview: builder.mutation<unknown, SingleRequest>({
      query({ id }: ReviewSingleRequest) {
        return {
          url: `/review/${id}`,
          method: "delete",
        };
      },
      invalidatesTags: ["Reviews", "id"],
    }),
  }),
});

export const {
  useGetAllReviewsQuery,
  useGetReviewQuery,
  useDeleteReviewMutation,
  useUpdateReviewMutation,
  useCreateReviewMutation,
} = reviewsApi;
export default reviewsApi.reducer;
