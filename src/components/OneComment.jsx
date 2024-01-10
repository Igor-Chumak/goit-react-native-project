import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { userAuth } from "../hooks";
import { formatCreateAtFirebase } from "../utility/formatCreateAtFirebase";
// import photoDefault from "../images/blank/ellipse.png";

export const OneComment = ({ comment }) => {
  const {
    uid,
    // email,
    // displayName,
    // isLoggedIn,
    avatarUrl,
  } = userAuth();
  const [imageUrl, setImageUrl] = useState(
    "https://firebasestorage.googleapis.com/v0/b/reactnative-goit-e3765.appspot.com/o/posts%2Favatar_test_comments.png?alt=media&token=fd148db5-4ecf-4a8f-88b4-aa6b2992bb5c"
  );
  const isMyComment = uid === comment.authorId ? true : false;
  const datePost = formatCreateAtFirebase(comment.createdAt.toDate());

  useEffect(() => {
    async function defineImageUrl(authorId) {
      if (uid === authorId) return setImageUrl(avatarUrl);
      // const url = await firebaseApiAsync.getAllPosts();
      // console.log("Posts url :>> ", url);
    }
    defineImageUrl(comment.authorId);
  }, []);

  return (
    <View style={[styles.commentWrap, !isMyComment ? { paddingLeft: 44 } : { paddingRight: 44 }]}>
      <View style={styles.commentTextBox}>
        <Text style={styles.commentText}>{comment.text}</Text>
        <Text
          style={[
            styles.commentData,
            !isMyComment ? { textAlign: "right" } : { textAlign: "left" },
          ]}
        >
          {datePost}
        </Text>
      </View>
      <View style={[styles.commentPhotoBox, !isMyComment ? { left: 0 } : { right: 0 }]}>
        <Image source={{ uri: imageUrl }} style={styles.commentPhoto} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentWrap: {
    position: "relative",
    width: "100%",
    // paddingLeft: 44, // paddingRight: 44,
  },
  commentTextBox: {
    padding: 16,
    // width: "100%",
    minWidth: "100%",
    gap: 8,
    backgroundColor: "white",
    justifyContent: "flex-start",
  },
  commentText: {
    // width: "100%",
    fontFamily: "RobotoR",
    textAlign: "left",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  commentData: {
    // width: "100%",
    fontFamily: "RobotoR",
    // textAlign: "right", // "left",
    fontSize: 10,
    lineHeight: 11,
    color: "#BDBDBD",
  },
  commentPhotoBox: {
    position: "absolute",
    top: 0,
    // left: 0, // right: 0,
    width: 28,
    height: 28,
    backgroundColor: "#E8E8E8",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  commentPhoto: {
    width: 28,
    height: 28,
    resizeMode: "cover",
    borderRadius: 14,
  },
});
