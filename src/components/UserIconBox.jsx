import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import UserIcon from "../Img/user.svg";

export const UserIconBox = ({ fill }) => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.pressIcon} onPress={() => navigation.navigate("Profile")}>
      <UserIcon width={24} height={24} fill={fill} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressIcon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
