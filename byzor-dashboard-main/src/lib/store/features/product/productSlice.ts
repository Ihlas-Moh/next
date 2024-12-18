import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IReduxProductState } from "@/lib/store/@types";
import { ProductDocType } from "@/lib/store/@types/product";

// Define the initial state for the product slice
export const initialState: IReduxProductState = {
  selectedProduct: null,
  products: [],
};

// Create the productSlice
export const productSlice = createSlice({
  name: "productSlice", // name of the slice
  initialState, // initial state
  reducers: {
    // Reducer to set the list of products
    setProducts: (state, { payload }: PayloadAction<Array<ProductDocType>>) => {
      state.products = payload;
      if (payload.length > 1) {
        state.selectedProduct = payload[0]; // Select the first product if more than 1 product
      }
    },
    // Reducer to set the selected product
    setSelectedProduct: (
      state,
      { payload }: PayloadAction<ProductDocType | null>
    ) => {
      state.selectedProduct = payload; // Set the selected product to null or the passed product
    },
  },
});

// Export actions to be used in components
export const { setSelectedProduct, setProducts } = productSlice.actions;

// Export the reducer to be included in the store
export default productSlice.reducer;
