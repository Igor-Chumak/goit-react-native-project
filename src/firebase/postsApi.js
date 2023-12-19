import {
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  collection,
  query,
  where,
  doc,
  Timestamp,
} from "firebase/firestore";

import { db } from "./config";
import { useSelector } from "react-redux";

// const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

const addPost = async (uid, post) => {
  try {
    await addDoc(collection(db, "posts"), { ...post, uid });
  } catch (error) {
    throw new Error("DB Error");
  }
};

const getAllPosts = async () => {
  let posts = [];
  try {
    const res = await getDocs(collection(db, "posts"));
    res.forEach((doc) => posts.push({ id: doc.id, ...doc.data() }));
    return posts;
  } catch (error) {
    throw new Error("DB Error");
  }
};

const getPostsByUserId = async (uid) => {
  let posts = [];
  
  const q = query(collection(db, "posts"), where("uid", "==", uid));
  try {
    const res = await getDocs(q);
    res.forEach((doc) => posts.push({ id: doc.id, ...doc.data() }));
    
    return posts;
  } catch (error) {
    throw new Error("DB Error");
  }
};

const addComment = async (pid, text) => {
  try {
    await addDoc(collection(db, "comments"), { pid, text, createdAt: Timestamp.now() });
  } catch (error) {
    throw new Error("DB Error");
  }
};

const getCommentsByPostId = async (pid) => {
  let posts = [];

  const q = query(collection(db, "comments"), where("pid", "==", pid));
  try {
    const res = await getDocs(q);
    res.forEach((doc) => posts.push({ id: doc.id, ...doc.data() }));

    return posts;
  } catch (error) {
    throw new Error("DB Error");
  }
};

export const useFireStore = () => {
  return {
    addPost,
    getAllPosts,
    getPostsByUserId,
    addComment,
    getCommentsByPostId,
  };
};
