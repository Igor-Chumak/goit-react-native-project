import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  email: null,
  displayName: null,
  isLoggedIn: false,
  avatarUrl: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: {
      reducer: (state, action) => ({ ...state, ...action.payload }),
      prepare: (user) => ({
        payload: { ...user, isLoggedIn: true },
      }),
    },
    logout: () => initialState,
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
