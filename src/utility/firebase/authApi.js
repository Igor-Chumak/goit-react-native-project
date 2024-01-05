import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./config";
import storageApiAsync from "./storageApi";
import firebaseApiAsync from "./firebaseApi";

const signInUser = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return auth.currentUser;
  } catch (err) {
    throw new Error(err.message);
  }
};

const signOutUser = async () => {
  try {
    await signOut(auth);
    return auth.currentUser;
  } catch (err) {
    throw new Error(err.message);
  }
};

const registerUser = async ({ email, password, displayName, photoURL }) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    // console.log("registerUser res.user :>> ", res.user);

    const uploadUrl = await storageApiAsync.uploadFileToStorage({
      collection: "avatars",
      name: res.user.uid + "_avatar",
      fileUri: photoURL,
    });

    await updateProfile(res.user, {
      displayName,
      photoURL: uploadUrl,
    });

    // console.log("auth.currentUser :>> ", auth.currentUser);

    await firebaseApiAsync.addUser({
      uid: res.user.uid,
      email: res.user.email,
      displayName: res.user.displayName,
      photoURL: res.user.photoURL,
    });

    return auth.currentUser;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const useUserAuth = () => {
  return {
    signInUser,
    signOutUser,
    registerUser,
    auth,
  };
};
