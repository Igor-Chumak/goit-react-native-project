import { Image, StyleSheet, Text, View } from "react-native";

import CameraIcon from "../Img/camera.svg";
// import imgDEf from "../Img/no_images.png";

// title - text under the picture
// fill ['#BDBDBD'] - filling svg icon camera, if 'white' - additionally change background: rgba(255, 255, 255, 0.3)
// source [''] - path to image
export const CreateContentBlock = ({ title = "", source = "", fill = "#BDBDBD" }) => {
  console.log("source :>> ", source);

  const colorIcon = !source
    ? { fill: "#BDBDBD", bgColor: "white" }
    : { fill: "white", bgColor: "rgba(255, 255, 255, 0.3)" };

  return (
    <View style={styles.contentBox}>
      <View style={styles.contentImageBox}>
        <View style={[styles.icon_Box, { backgroundColor: colorIcon.bgColor }]}>
          <CameraIcon width={24} height={24} fill={colorIcon.fill} />
        </View>
        {source && <Image source={source} style={styles.contentImage}></Image>}
      </View>
      <View style={styles.contentTitleBox}>
        <Text style={styles.contentTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentBox: {
    // marginBottom: 32,
    width: "100%",
    justifyContent: "flex-start",
    gap: 8,
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "blue",
  },
  contentImageBox: {
    display: "relative",
    width: "100%",
    height: 240,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  contentImage: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
  },
  contentTitleBox: {
    width: "100%",
  },
  contentTitle: {
    fontFamily: "RobotoM",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  icon_Box: {
    position: "absolute",
    width: 60,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
    borderRadius: 30,
    zIndex: 10,
  },
});
