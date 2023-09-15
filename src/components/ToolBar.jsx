import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import TrashIcon from "../Img/trash_toolbar.svg";

export const ToolBar = () => {
  const pressed = () => {
    console.log("trash pressed :>> ");
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.boxToolBar}> */}
      <TouchableOpacity onPress={pressed}>
        <View style={styles.pressIcon}>
          <TrashIcon width={24} height={24} />
        </View>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
    width: "100%",
    height: 83,
    paddingTop: 9,
    alignItems: "center",
    borderColor: "rgba(0,0,0,0.3)",
    backgroundColor: "white",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  boxToolBar: {
    // width: "100%",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // gap: 31,
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
