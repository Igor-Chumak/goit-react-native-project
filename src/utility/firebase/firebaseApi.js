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
import { db } from "./config";
import storageApiAsync from "./storageApi";

const addUser = async ({ uid, user }) => {
  try {
    return await setDoc(doc(db, "users", uid), { ...user }, { merge: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUser = async () => {
  try {
    const q = query(collection(db, "users"), orderBy("displayName", "asc"));
    const res = await getDocs(q);
    return res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error(error.message);
  }
};

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

const getAllPosts = async () => {
  try {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const res = await getDocs(q);
    return res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPostsByUserId = async (uid) => {
  try {
    const q = query(
      collection(db, "posts"),
      where("owner", "==", uid),
      orderBy("createdAt", "desc")
    );
    const res = await getDocs(q);
    return res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error(error.message);
  }
};

const changeLike = async ({ postId, data, type }) => {
  try {
    postRef = doc(db, "posts", postId);
    switch (type) {
      case "add":
        return await updateDoc(postRef, { likes: arrayUnion(data) });
      case "remove":
        return await updateDoc(postRef, { likes: arrayRemove(data) });
      default:
        console.log("Invalid subscription type");
        return;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const addComment = async ({ postId, data, type }) => {
  try {
    postRef = doc(db, "posts", postId);
    switch (type) {
      case "add":
        return await updateDoc(postRef, {
          comments: arrayUnion({ ...data, id: uuid.v4(), createdAt: Timestamp.now() }),
        });
      default:
        console.log("Invalid subscription type");
        return;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getCommentsByPostId = async (postId) => {
  postRef = doc(db, "posts", postId);
  try {
    const docSnap = await getDoc(postRef);
    return docSnap.data().comments;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPhotoUrlByUserId = async (userId) => {
  userRef = doc(db, "users", userId);
  try {
    const docSnap = await getDoc(userRef);
    return docSnap.data().photoURL;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default {
  addUser,
  getAllUser,
  addPost,
  getAllPosts,
  getPostsByUserId,
  changeLike,
  addComment,
  getCommentsByPostId,
  getPhotoUrlByUserId,
};
