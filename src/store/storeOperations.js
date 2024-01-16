import { createAsyncThunk } from "@reduxjs/toolkit";
//
import { firebaseApiAsync } from "../utility/firebase/index";

export const getAllPosts = createAsyncThunk("store/getAllPosts", async (_, thunkAPI) => {
  try {
    const data = await firebaseApiAsync.getAllPosts();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getPostsByUserId = createAsyncThunk(
  "store/getPostsByUserId",
  async (uid, thunkAPI) => {
    try {
      const data = await firebaseApiAsync.getPostsByUserId(uid);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllUser = createAsyncThunk("store/getAllUser", async (_, thunkAPI) => {
  try {
    const data = await firebaseApiAsync.getAllUser();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
