import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosRequestConfig } from "axios";
import Axios from "axios";
import { toast } from "sonner";
import type {
  AxiosBaseQueryArgs,
  ServiceExtraOptions,
} from "@/lib/axios/types";

const getRequestConfig = (args: string | AxiosRequestConfig) => {
  if (typeof args === "string") {
    return { url: args };
  }
  return args as AxiosRequestConfig;
};

const _axios = axios.create({
  baseURL: "/api/",
});

const axiosBaseQuery = <
  Args extends AxiosRequestConfig | string = AxiosRequestConfig,
  Result = unknown,
  DefinitionExtraOptions extends ServiceExtraOptions = Record<string, unknown>,
  Meta = Record<string, unknown>,
>({ transformResponse }: AxiosBaseQueryArgs<Meta> = {}): BaseQueryFn<
  Args,
  Result,
  unknown,
  DefinitionExtraOptions,
  Meta
> => {
  return async (args, api, extraOptions) => {
    try {
      const requestConfig = getRequestConfig(args);
      const result = await _axios({
        ...requestConfig,
        headers: {
          ...requestConfig.headers,
        },
        signal: api.signal,
        ...extraOptions,
      });
      if (
        requestConfig.method === "post" ||
        requestConfig.method === "put" ||
        requestConfig.method === "delete"
      ) {
        toast.success(
          `${
            requestConfig.method === "post"
              ? "Data Created"
              : requestConfig.method === "put"
                ? "Data Updated"
                : "Data Deleted"
          } Successfully`
        );
      }
      return {
        data: transformResponse ? transformResponse(result.data) : result.data,
      };
    } catch (err: unknown) {
      // @ts-ignore
      toast.error(err?.message ?? "Something went wrong");
      if (!Axios.isAxiosError(err)) {
        return err;
      }
      return new Error(err.message) as any;
    }
  };
};

export default axiosBaseQuery;
