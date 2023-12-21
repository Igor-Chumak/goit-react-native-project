import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import BtnAddIcon from "../Img/union.svg";
import BtnChangeIcon from "../Img/union_x.svg";
// const avatarDefault = require("../Img/avatar_default.png");
// const avatarNothing = require("../Img/react512.png");
import avatarDefault from "../Img/avatar_default.png";
// import avatarNothing from "../Img/react512.png";
import avatarNothing from "../Img/cat.jpg";

// const avatarNothingUrl = "https://asset.cloudinary.com/de7gxd2bv/ca4fe66dca7798f6e4455705a8d3cb92";

export const AvatarBox = ({ avatarUrl, setAvatarUrl = null, disabledChange = false }) => {
  const [avatarSelector, setAvatarSelector] = useState(true);
  const [selectorColor, setSelectorColor] = useState(
    disabledChange && avatarUrl ? "#E8E8E8" : "#FF6C00"
  );
  // if (disabledChange === true) {
  //   console.log("avatarUrl :>> ", avatarUrl);
  //   setSelectorColor("#E8E8E8");
  // }

  const handlePressIn = () => {
    setAvatarSelector(false);
    setSelectorColor("#837d7d"); // ("#E8E8E8");
  };

  const handlePressOut = () => {
    setAvatarSelector(true);
    if (avatarUrl === true) {
      setSelectorColor("#FF6C00");
    } else {
      setSelectorColor("#E8E8E8");
    }
  };

  const handlePress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      setAvatarUrl(uri);
    } else {
      alert("Nothing selected");
      if (!avatarUrl) setAvatarUrl(avatarNothing);
    }
  };

  // useEffect(() => {
  //   console.log("avatarUrl :>> ", avatarUrl);
  // }, [avatarUrl]);

  return (
    <View style={styles.wrapPhoto}>
      <Image source={`${avatarUrl ? avatarUrl : avatarDefault}`} style={styles.photo} />
      <Pressable
        style={[styles.btnAddBox, { borderColor: selectorColor }]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        disabled={disabledChange}
      >
        {avatarSelector && !avatarUrl && <BtnAddIcon width={13} height={13} />}
        {(!avatarSelector || avatarUrl) && <BtnChangeIcon width={13} height={13} />}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapPhoto: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    // borderWidth: 1,
    // borderColor: "red",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  btnAddBox: {
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    // borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
});
