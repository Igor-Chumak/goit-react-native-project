import { Image, StyleSheet, View } from "react-native";

import imageDefault from "../Img/no_images.png";

export const ContentBlockImage = ({ source = imageDefault }) => {
  return (
    <View style={styles.contentImageBox}>
      <Image source={source} style={styles.contentImage} />
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
