export type Resources =
  | "/store"
  | "/product"
  | "/user"
  | "/review"
  | "/coupon"
  | "/order"
  | "/payment"
  | "shipping";

export type GeneralRequestParams = {
  params: {
    id: string;
  };
};

export type GeneralAsyncRequestParams = Promise<{ id: string }>;
