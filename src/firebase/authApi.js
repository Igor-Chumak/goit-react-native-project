import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./config";

const signInUser = async ({ login, password }) => {
  try {
    await signInWithEmailAndPassword(auth, login, password);
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

const registerUser = async ({ login, password, displayName, photoURL }) => {
  // console.log(avatar);
  try {
    const res = await createUserWithEmailAndPassword(auth, login, password);
    await updateProfile(res.user, {
      displayName,
      photoURL,
    });
    // console.log(auth.currentUser);
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
