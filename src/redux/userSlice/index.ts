import { createSlice } from "@reduxjs/toolkit";

export interface IUserSlice {
  id: null | string;
  token: string | null;
  email: string | null;
  name: string | null;
  phone: string | null;
}

const initialState: IUserSlice = {
  id: null,
  email: null,
  token: null,
  name: null,
  phone: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
      state.token = null;
    },
  },
});

export const { addUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
