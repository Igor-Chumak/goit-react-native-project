import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
//
import { auth } from "../utility/firebase/config";
import storageApiAsync from "../utility/firebase/storageApi";
import firebaseApiAsync from "../utility/firebase/firebaseApi";

export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
  try {
    const { email, password, displayName, photoURL } = credentials;
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const uploadUrl = await storageApiAsync.uploadFileToStorage({
      collection: "avatars",
      name: res.user.uid + "_avatar",
      fileUri: photoURL,
    });

    await updateProfile(res.user, {
      displayName,
      photoURL: uploadUrl,
    });

    await firebaseApiAsync.addUser({
      uid: res.user.uid,
      user: {
        uid: res.user.uid,
        email: res.user.email,
        displayName: res.user.displayName,
        photoURL: res.user.photoURL,
      },
    });
    // console.log("auth.currentUser :>> ", auth.currentUser);

    return {
      uid: res.user.uid,
      email: res.user.email,
      displayName: res.user.displayName,
      avatarUrl: res.user.photoURL,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { email, password } = credentials;
    await signInWithEmailAndPassword(auth, email, password);
    return {
      email: auth.currentUser.email,
      displayName: auth.currentUser.displayName,
      uid: auth.currentUser.uid,
      avatarUrl: auth.currentUser.photoURL,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateAvatar = createAsyncThunk("auth/updateAvatar", async (credentials, thunkAPI) => {
  try {
    //
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
