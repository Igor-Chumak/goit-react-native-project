import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  collection,
  query,
  where,
  doc,
  Timestamp,
  arrayUnion,
  arrayRemove,
  orderBy,
} from "firebase/firestore";
import uuid from "react-native-uuid";
//
import { db } from "../utility/firebase/config";
import { firebaseApiAsync } from "../utility/firebase/index";

export const getPostsByUserId = createAsyncThunk(
  "store/getPostsByUserId",
  async (uid, thunkAPI) => {
    try {
      return await firebaseApiAsync.getPostsByUserId(uid);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
