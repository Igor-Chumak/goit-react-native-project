import { createSlice } from "@reduxjs/toolkit";
import { store } from "./storeHandlers";
import { commonHandle } from "./commonHandlers";

const initialState = {
  currentUser: null,
  usersList: [],
  isLoading: false,
  error: "",
};

const storSlice = createSlice({
  name: "store",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(isPendingAction, commonHandle.pending)
      .addMatcher(isRejectedAction, commonHandle.rejected)
      .addMatcher(isFulfilledAction, commonHandle.fulfilled);
  },
  reducers: {
    setMode: (state, action) => ({ ...state, ...action.payload }),
  },
});

function isRejectedAction(action) {
  return action.type.endsWith("/rejected");
}

function isPendingAction(action) {
  return action.type.endsWith("/pending");
}

function isFulfilledAction(action) {
  return action.type.endsWith("/fulfilled");
}

export const { setMode } = storSlice.actions;
export default storSlice.reducer;
