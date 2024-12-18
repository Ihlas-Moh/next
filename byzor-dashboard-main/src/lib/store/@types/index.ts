import { UserType } from "@/lib/actions/@types/user";
import {
  useCreateStoreMutation,
  useUpdateStoreMutation,
} from "@/lib/store/api/storeService";
import { useCreateUserMutation } from "@/lib/store/api/userService";
import { useCreateProductMutation } from "@/lib/store/api/productService";
import { useCreateCouponMutation } from "@/lib/store/api/couponService";
import { useCreateReviewMutation } from "@/lib/store/api/reviewService";
import { StoreDocType } from "@/lib/store/@types/store";
import { UserDocType } from "@/lib/store/@types/user";
import { ProductDocType } from "@/lib/store/@types/product";
import { ReviewDocType } from "@/lib/store/@types/review";
import { CouponDocType } from "@/lib/store/@types/coupon";

// Corrected GenericMutationType with proper union type
export type GenericMutationType =
  | typeof useCreateStoreMutation
  | typeof useCreateUserMutation
  | typeof useCreateProductMutation
  | typeof useUpdateStoreMutation
  | typeof useCreateReviewMutation
  | typeof useCreateCouponMutation;

export interface IReduxAppState {
  currentUser: UserType | null;
}

export interface IReduxStoreState {
  selectedStore: StoreDocType | null;
  stores: Array<StoreDocType>;
}

export interface IReduxUserState {
  selectedUser: UserDocType | null;
  users: Array<UserDocType>;
}

export interface IReduxProductState {
  selectedProduct: ProductDocType | null;
  products: Array<ProductDocType>;
}

export interface IReduxCouponState {
  selectedCoupon: CouponDocType | null;
  coupons: Array<CouponDocType>;
}

export interface IReduxReviewState {
  selectedReview: ReviewDocType | null;
  reviews: Array<ReviewDocType>;
}

export type RequestWithToken = {
  token: string;
};

export type EmptyArgs = undefined;

export type SingleRequest = {
  id?: string;
};
