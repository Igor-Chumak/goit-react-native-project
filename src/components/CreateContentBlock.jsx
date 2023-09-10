import { Image, StyleSheet, Text, View } from "react-native";

// import imageDefault from "../Img/no_images.png";
import CameraIcon from "../Img/camera.svg";

// title - text under the picture
// fill ['#BDBDBD'] - filling svg icon camera, if 'white' - additionally change background: rgba(255, 255, 255, 0.3)
export const CreateContentBlock = ({ title = "", fill = "#BDBDBD" }) => {
  return (
    <View style={styles.contentBox}>
      <View style={styles.contentImageBox}>
        <View
          style={[
            styles.icon_Box,
            fill === "white" ? { backgroundColor: "rgba(255, 255, 255, 0.3)" } : {},
          ]}
        >
          <CameraIcon width={24} height={24} fill={fill} />
        </View>
        {false && <Image source={imageDefault} style={styles.contentImage}></Image>}
      </View>
      <View style={styles.contentTitleBox}>
        <Text style={styles.contentTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentBox: {
    marginBottom: 32,
    width: "100%",
    justifyContent: "flex-start",
    gap: 8,
    alignItems: "center",
    backgroundColor: "white",
  },
  contentImageBox: {
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
    resizeMode: "center",
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
    width: 60,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
  },
});
