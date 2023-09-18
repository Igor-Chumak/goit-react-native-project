import { StyleSheet, View } from "react-native";

import UserIcon from "../Img/user.svg";

export const UserIconBox = ({ fill }) => {
  return (
    <View style={styles.pressIcon}>
      <UserIcon width={24} height={24} fill={fill} />
    </View>
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
