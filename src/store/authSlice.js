import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  login: null,
  displayName: null,
  auth: false,
  avatarUri: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: {
      reducer: (state, action) => ({ ...state, ...action.payload }),
      prepare: (user) => ({
        payload: { ...user, auth: true },
      }),
    },
    logout: () => initialState,
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
