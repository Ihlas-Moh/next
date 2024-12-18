import { AxiosHeaders, AxiosRequestHeaders, RawAxiosRequestHeaders } from "axios";
import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type BaseResponse = {
  httpStatus: 200;
  created_at: string;
};

export interface AxiosBaseQueryArgs<Meta, Response = BaseResponse> {
  meta?: Meta;
  prepareHeaders?: (
    headers: RawAxiosRequestHeaders | typeof AxiosHeaders,
    api: BaseQueryApi,
  ) => AxiosRequestHeaders;
  transformResponse?: (response: Response) => unknown;
}

export interface ServiceExtraOptions {
  authRequired?: boolean;
}
