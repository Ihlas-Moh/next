import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IReduxReviewState } from "@/lib/store/@types";
import { ReviewDocType } from "@/lib/store/@types/review";

// Define the initial state for the review slice
export const initialState: IReduxReviewState = {
  selectedReview: null,
  reviews: [],
};

// Create the reviewSlice
export const reviewSlice = createSlice({
  name: "reviewSlice", // name of the slice
  initialState, // initial state
  reducers: {
    // Reducer to set the list of reviews
    setReviews: (state, { payload }: PayloadAction<Array<ReviewDocType>>) => {
      state.reviews = payload;
      if (payload.length > 1) {
        state.selectedReview = payload[0]; // Select the first review if more than 1 review
      }
    },
    // Reducer to set the selected review
    setSelectedReview: (
      state,
      { payload }: PayloadAction<ReviewDocType | null>
    ) => {
      state.selectedReview = payload; // Set the selected review to null or the passed review
    },
  },
});

// Export actions to be used in components
export const { setSelectedReview, setReviews } = reviewSlice.actions;

// Export the reducer to be included in the store
export default reviewSlice.reducer;
