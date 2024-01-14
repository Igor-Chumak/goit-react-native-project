import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register, updateAvatar } from "./authOperations";

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
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => ({
        ...state,
        ...action.payload,
        isLoggedIn: true,
      }))
      .addCase(logIn.fulfilled, (state, action) => ({
        ...state,
        ...action.payload,
        isLoggedIn: true,
      }))
      .addCase(logOut.fulfilled, () => ({ ...initialState }))
      .addCase(updateAvatar.fulfilled, (state, action) => ({
        ...state,
        ...action.payload,
      }));
  },
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
