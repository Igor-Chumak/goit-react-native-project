import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  isLoading: false,
  error: {
    message: "",
    status: "",
  },
};

const storSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setMode(state, action) {
      state = action.payload;
    },
  },
});

export const { setMode } = storSlice.actions;
export default storSlice.reducer;
