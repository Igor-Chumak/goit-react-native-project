import { Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";

import GridIcon from "../../Img/grid.svg";
import UserIcon from "../../Img/user.svg";
import BtnAddIcon from "../../Img/union_post.svg";

export const TabBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Pressable style={styles.icon}>
          <GridIcon width={24} height={24} />
        </Pressable>
        <Pressable style={styles.button}>
          <BtnAddIcon width={13} height={13} />
        </Pressable>
        <Pressable style={styles.icon}>
          <UserIcon width={24} height={24} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 83,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(0,0,0,0.3)",
    position: "absolute",
    bottom: 0,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 9,
    alignItems: "center",
  },
  text: {
    fontSize: 17,
  },
  textbox: {
    width: 175,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: 44,
  },
  button: {
    marginLeft: 31,
    marginRight: 31,
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: 70,
    height: 40,
  },
  btnText: {
    fontSize: 16,
    color: "white",
  },
});
