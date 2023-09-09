import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import imageDefault from "../Img/no_images.png";
import MapPin from "../Img/map-pin.svg";

export const ContentBlock = () => {
  return (
    <View style={styles.contentBox}>
      <View style={styles.contentImageBox}>
        <Image source={imageDefault} style={styles.contentImage}></Image>
      </View>
      <View style={styles.contentTitleBox}>
        <Text style={styles.contentTitle}>React Native</Text>
      </View>
      <View style={styles.contentDetailsBox}>
        <View style={styles.icon_text_Box}>
          <MapPin width={24} height={24} />
          <Text style={styles.contentDetailsText}>Comments</Text>
        </View>
        <View style={[styles.icon_text_Box, styles.likes_Box]}>
          <MapPin width={24} height={24} />
          <Text style={styles.contentDetailsText}>Likes</Text>
        </View>
        <View style={[styles.icon_text_Box, styles.mapBox]}>
          <MapPin width={24} height={24} />
          <Text style={[styles.contentDetailsText]}>Ukraine</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentBox: {
    width: "100%",
    justifyContent: "flex-start",
    gap: 8,
    alignItems: "center",
    backgroundColor: "white",
    // borderWidth: StyleSheet.hairlineWidth,
  },
  contentImageBox: {
    width: "100%",
    height: 240,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: "blue",
  },
  contentImage: {
    width: "100%",
    height: 240,
    resizeMode: "center",
  },
  contentTitleBox: {
    width: "100%",
  },
  contentTitle: {
    fontFamily: "RobotoM",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  contentDetailsBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: "red",
  },
  icon_text_Box: {
    flexDirection: "row",
    // justifyContent: "flex-start",
    alignItems: "center",
    gap: 6,
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: "blue",
  },
  contentDetailsText: {
    fontFamily: "RobotoR",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  likes_Box: {
    marginLeft: 24,
  },
  mapBox: {
    marginLeft: "auto",
  },
});
