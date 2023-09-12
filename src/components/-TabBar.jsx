import { Pressable, StyleSheet, Text, View } from "react-native";

import GridIcon from "../Img/grid.svg";
import UserIcon from "../Img/user.svg";
import BtnAddIcon from "../Img/union_post.svg";

export const TabBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxTabBar}>
        <Pressable style={styles.pressIcon}>
          <GridIcon width={24} height={24} />
        </Pressable>
        <Pressable style={styles.button}>
          <BtnAddIcon width={13} height={13} />
        </Pressable>
        <Pressable style={styles.pressIcon}>
          <UserIcon width={24} height={24} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    width: "100%",
    height: 83,
    paddingTop: 9,
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    position: "absolute",
    backgroundColor: "white",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  boxTabBar: {
    // width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 31,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  pressIcon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
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
