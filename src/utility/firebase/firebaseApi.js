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
import storageApiAsync from "./storageApi";

import { db } from "./config";

const addPost = async (uid, post) => {
  try {
    const postRef = doc(collection(db, "posts"));
    const uploadUrl = await storageApiAsync.uploadFileToStorage({
      collection: "posts",
      name: `postId_${postRef.id}.userUid_${uid}`,
      fileUri: post.photoUrl,
    });
    return await setDoc(postRef, {
      ...post,
      photoUrl: uploadUrl,
      owner: uid,
      createdAt: Timestamp.now(),
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

const addUser = async (user) => {
  try {
    return await setDoc(doc(collection(db, "users", user.uid)), { ...user });
    // return await addDoc(collection(db, "users"), { ...user });
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllPosts = async () => {
  let posts = [];
  try {
    const res = await getDocs(collection(db, "posts"));
    res.forEach((doc) => posts.push({ id: doc.id, ...doc.data() }));
    return posts;
  } catch (error) {
    throw new Error(error.message);
  }
};
// mentor
// const getAllPosts = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "posts"));

//     setPosts(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   } catch (error) {
//     console.log(error.message);
//   }
// };

const getPostsByUserId = async (uid) => {
  let posts = [];

  const q = query(collection(db, "posts"), where("owner", "==", uid));
  try {
    const res = await getDocs(q);
    res.forEach((doc) => posts.push({ id: doc.id, ...doc.data() }));

    return posts;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addComment = async (pid, text) => {
  try {
    await addDoc(collection(db, "comments"), { pid, text, createdAt: Timestamp.now() });
  } catch (error) {
    throw new Error(error.message);
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
    throw new Error(error.message);
  }
};

export default {
  addPost,
  addUser,
  getAllPosts,
  getPostsByUserId,
  addComment,
  getCommentsByPostId,
};
