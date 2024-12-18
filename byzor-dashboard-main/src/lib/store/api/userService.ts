import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/lib/axios/axiosBaseQuery";
import {
  UserRequest,
  UserResponse,
  UserSingleRequest,
  UsersResponse,
} from "@/lib/store/@types/user";
import { SingleRequest } from "@/lib/store/@types";

export const usersApi = createApi({
  reducerPath: "usersServices",
  tagTypes: ["Users", "id"],
  baseQuery: axiosBaseQuery({
    // @ts-ignore
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<UsersResponse, void>({
      query: () => {
        return {
          url: `/user`,
        };
      },
      keepUnusedDataFor: 3600,
      providesTags: () => {
        return [{ type: "Users", id: "id" }];
      },
      transformResponse: (response: { data: UsersResponse }) => response.data,
    }),

    getUser: builder.query<UserResponse, SingleRequest>({
      query: ({ id }: SingleRequest) => {
        return {
          url: `/user/${id}`,
        };
      },
      keepUnusedDataFor: 3600,

      transformResponse: (response: { data: UserResponse }) => response.data,
    }),

    createUser: builder.mutation<UserResponse, UserRequest>({
      query({ ...args }: UserRequest) {
        return {
          url: "/user",
          method: "post",
          data: { ...args },
        };
      },
      invalidatesTags: ["Users"],
    }),

    updateUser: builder.mutation<UserResponse, UserSingleRequest>({
      query({ id, ...args }: UserSingleRequest) {
        return {
          url: `/user/${id}`,
          method: "put",
          data: { ...args },
        };
      },
      invalidatesTags: ["id"],
    }),

    deleteUser: builder.mutation<unknown, SingleRequest>({
      query({ id }: UserSingleRequest) {
        return {
          url: `/user/${id}`,
          method: "delete",
        };
      },
      invalidatesTags: ["Users", "id"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useCreateUserMutation,
} = usersApi;
export default usersApi.reducer;
