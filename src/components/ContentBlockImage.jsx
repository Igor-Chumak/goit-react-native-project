import { Image, StyleSheet, View } from "react-native";

import { postNoPhoto } from "../data/const";

export const ContentBlockImage = ({ source = null }) => {
  const imgSource = source ? { uri: source } : postNoPhoto;

  return (
    <View style={styles.contentImageBox}>
      <Image source={imgSource} style={styles.contentImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentImageBox: {
    width: "100%",
    height: 240,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  contentImage: {
    width: "100%",
    // width: 343,
    height: 240,
    resizeMode: "cover",
    borderRadius: 8,
  },
});
