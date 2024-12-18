import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IReduxAppState } from "@/lib/store/@types";
import { UserType } from "@/lib/actions/@types/user";
import Cookies from "js-cookie";

export const initialState: IReduxAppState = {
  currentUser: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateUser: (state, { payload }: PayloadAction<UserType | null>) => {
      if (payload) {
        Cookies.set("user", JSON.stringify(payload));
      } else {
        Cookies.remove("user");
      }
      state.currentUser = payload;
    },
  },
});

export const { updateUser } = appSlice.actions;

export default appSlice.reducer;
