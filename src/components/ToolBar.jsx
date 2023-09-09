import { Pressable, StyleSheet, Text, View } from "react-native";

import Trash from "../Img/trash_toolbar.svg";

export const ToolBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxToolBar}>
        <Pressable style={styles.pressIcon}>
          <Trash width={24} height={24} />
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
  boxToolBar: {
    // width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 31,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  pressIcon: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    borderRadius: 20,
  },
});
