import { Image, StyleSheet, Text, View } from "react-native";

import { userAuth } from "../hooks";
import photoDefault from "../images/blank/ellipse.png";

export const OneComment = ({ type = "" }) => {
  const {
    uid,
    // email,
    // displayName,
    // isLoggedIn,
    // avatarUrl,
  } = userAuth();

  return (
    <View style={[styles.commentWrap, !type ? { paddingLeft: 44 } : { paddingRight: 44 }]}>
      <View style={styles.commentTextBox}>
        <Text style={styles.commentText}>
          Really love your most recent photo. I’ve been trying to capture the same thing for a few
          months and would love some tips!
        </Text>
        <Text style={[styles.commentData, !type ? { textAlign: "right" } : { textAlign: "left" }]}>
          09 червня, 2020 | 08:40
        </Text>
      </View>
      <View style={[styles.commentPhotoBox, !type ? { left: 0 } : { right: 0 }]}>
        <Image source={photoDefault} style={styles.commentPhoto} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentWrap: {
    position: "relative",
    // paddingLeft: 44, // paddingRight: 44,
    width: "100%",
  },
  commentTextBox: {
    padding: 16,
    width: "100%",
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
    // textAlign: "right", // textAlign: "left",
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
