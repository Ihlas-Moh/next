import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IReduxCouponState } from "@/lib/store/@types";
import { CouponDocType } from "@/lib/store/@types/coupon";

export const initialState: IReduxCouponState = {
  selectedCoupon: null,
  coupons: [],
};

export const couponSlice = createSlice({
  name: "couponSlice",
  initialState,
  reducers: {
    setCoupons: (state, { payload }: PayloadAction<Array<CouponDocType>>) => {
      state.coupons = payload;
      if (payload.length > 1) {
        state.selectedCoupon = payload[0];
      }
    },
    setSelectedCoupon: (
      state,
      { payload }: PayloadAction<CouponDocType | null>,
    ) => {
      state.selectedCoupon = payload;
    },
  },
});

export const { setSelectedCoupon, setCoupons } = couponSlice.actions;

export default couponSlice.reducer;
