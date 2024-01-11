import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GetCamera } from "./GetCamera";

import { definePosition } from "../utility/googleLocation/googleLocation";
import CameraIcon from "../images/camera.svg";
// import imgDEf from "../images/no_images.png";

// title - text under the picture
// fill ['#BDBDBD'] - filling svg icon camera, if 'white' - additionally change background: rgba(255, 255, 255, 0.3)
// source [''] - path to image

export const CreateContentBlock = ({ photo, localDispatch }) => {
  const [onCamera, setOnCamera] = useState(false);
  const [title, setTitle] = useState("Завантажте фото");
  const [colorsIcon, setColorsIcon] = useState({ fill: "#BDBDBD", bgColor: "white" });

  useEffect(() => {
    setTitle(!photo ? "Завантажте фото" : "Редагувати фото");
    setColorsIcon(
      !photo
        ? { fill: "#BDBDBD", bgColor: "white" }
        : { fill: "white", bgColor: "rgba(255, 255, 255, 0.3)" }
    );
  }, [photo]);

  const closeCameraAsync = async (ref) => {
    setOnCamera(false);
    const { coords, location } = await definePosition();
    localDispatch({ type: "update", payload: { photoUrl: ref, coords, location } });
  };

  return (
    <TouchableOpacity onPress={() => setOnCamera(true)} style={{ width: "100%" }}>
      <View style={styles.contentBox}>
        <View style={styles.contentImageBox}>
          {onCamera ? (
            <GetCamera closeCamera={closeCameraAsync} />
          ) : (
            <>
              <View style={[styles.icon_Box, { backgroundColor: colorsIcon.bgColor }]}>
                <CameraIcon width={24} height={24} fill={colorsIcon.fill} />
              </View>
              {photo && <Image source={{ uri: photo }} style={styles.contentImage}></Image>}
            </>
          )}
        </View>
        <View style={styles.contentTitleBox}>
          <Text style={styles.contentTitle}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    borderRadius: 30,
    zIndex: 10,
  },
});
