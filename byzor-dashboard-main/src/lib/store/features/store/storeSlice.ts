import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IReduxStoreState } from "@/lib/store/@types";
import { StoreDocType } from "@/lib/store/@types/store";

export const initialState: IReduxStoreState = {
  selectedStore: null,
  stores: [],
};

export const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {
    setStores: (state, { payload }: PayloadAction<Array<StoreDocType>>) => {
      state.stores = payload;
      if (payload.length > 1) {
        state.selectedStore = payload[0];
      }
    },
    setSelectedStore: (
      state,
      { payload }: PayloadAction<StoreDocType | null>,
    ) => {
      state.selectedStore = payload;
    },
  },
});

export const { setSelectedStore, setStores } = storeSlice.actions;

export default storeSlice.reducer;
