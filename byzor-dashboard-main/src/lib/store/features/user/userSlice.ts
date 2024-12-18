import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IReduxUserState } from "@/lib/store/@types";  // Modify this import based on where your types are stored
import { UserDocType } from "@/lib/store/@types/user";  // Assuming UserDocType is defined similarly to StoreDocType

export const initialState: IReduxUserState = {
  selectedUser: null,
  users: [],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUsers: (state, { payload }: PayloadAction<Array<UserDocType>>) => {
      state.users = payload;
      if (payload.length > 1) {
        state.selectedUser = payload[0];
      }
    },
    setSelectedUser: (
      state,
      { payload }: PayloadAction<UserDocType | null>
    ) => {
      state.selectedUser = payload;
    },
  },
});

export const { setSelectedUser, setUsers } = userSlice.actions;

export default userSlice.reducer;
