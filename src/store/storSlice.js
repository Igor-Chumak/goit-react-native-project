import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts, getAllUser, getPostsByUserId } from "./storeOperations";
import { commonHandle } from "./commonHandlers";

const initialState = {
  userSelectedId: null,
  usersList: [],
  posts: [],
  isLoading: false,
  error: "",
};

const storSlice = createSlice({
  name: "store",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.pending, (state, action) => {
        state.usersList = [];
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        // console.log("action.payload :>> ", action.payload);
        state.usersList = action.payload;
      })
      .addCase(getPostsByUserId.pending, (state, action) => {
        state.posts = [];
      })
      .addCase(getPostsByUserId.fulfilled, (state, action) => {
        // console.log("action.payload :>> ", action.payload);
        state.posts = action.payload;
      })
      .addCase(getAllPosts.pending, (state, action) => {
        state.posts = [];
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        // console.log("action.payload :>> ", action.payload);
        state.posts = action.payload;
      })
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
