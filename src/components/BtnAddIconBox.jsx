import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BtnAddIcon from "../Img/union_post.svg";

export const BtnAddIconBox = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate("CreatePost")}>
      <BtnAddIcon width={13} height={13} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});
