import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: {
    message: "",
    status: "",
  },
};

const slice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setMode(state, action) {
      state = action.payload;
    },
  },
});

export const { setMode } = slice.actions;
export default slice.reducer;
