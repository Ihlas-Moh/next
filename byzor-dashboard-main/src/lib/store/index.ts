import { configureStore } from "@reduxjs/toolkit";
import appReducer from "@/lib/store/features/app/appSlice";
import storeReducer from "@/lib/store/features/store/storeSlice";
import productReducer from "@/lib/store/features/product/productSlice";
import userReducer from "@/lib/store/features/user/userSlice";
import reviewReducer from "@/lib/store/features/review/reviewSlice";
import couponReducer from "@/lib/store/features/coupon/couponSlice";
import { storesApi } from "@/lib/store/api/storeService";
import { usersApi } from "@/lib/store/api/userService";
import { productsApi } from "@/lib/store/api/productService";
import { couponsApi } from "@/lib/store/api/couponService";
import { reviewsApi } from "@/lib/store/api/reviewService";

export const makeStore = () => {
  return configureStore({
    reducer: {
      app: appReducer,
      store: storeReducer,
      user: userReducer,
      product: productReducer,
      review: reviewReducer,
      coupon: couponReducer,
      [storesApi.reducerPath]: storesApi.reducer,
      [usersApi.reducerPath]: usersApi.reducer,
      [productsApi.reducerPath]: productsApi.reducer,
      [reviewsApi.reducerPath]: reviewsApi.reducer,
      [couponsApi.reducerPath]: couponsApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        storesApi.middleware,
        usersApi.middleware,
        productsApi.middleware,
        productsApi.middleware,
        couponsApi.middleware,
        reviewsApi.middleware
      )
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
