import { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { avatarNothing, AVATAR_DEFAULT } from "../data";
import BtnAddIcon from "../images/union.svg";
import BtnChangeIcon from "../images/union_x.svg";

export const AvatarBox = ({ avatarUrl, setAvatarUrl = null, disabledChange = false }) => {
  const [avatarSelector, setAvatarSelector] = useState(true);
  const [selectorColor, setSelectorColor] = useState(avatarUrl ? "#E8E8E8" : "#FF6C00");

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
      // if (!avatarUrl) setAvatarUrl(avatarNothing);
      setAvatarUrl(avatarNothing);
    }
  };

  const imgSource = avatarUrl ? { uri: avatarUrl } : AVATAR_DEFAULT;

  return (
    <View style={styles.wrapPhoto}>
      <Image source={imgSource} style={styles.photo} />
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
  },
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  btnAddBox: {
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 24,
    height: 24,
    backgroundColor: "#F6F6F6",
    borderRadius: 12,
    borderWidth: 1,
    // borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
});
