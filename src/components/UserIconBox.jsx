import { Pressable, StyleSheet } from "react-native";

import UserIcon from "../Img/user.svg";

export const UserIconBox = () => {
  return (
    <Pressable style={styles.pressIcon}>
      <UserIcon width={24} height={24} />
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
