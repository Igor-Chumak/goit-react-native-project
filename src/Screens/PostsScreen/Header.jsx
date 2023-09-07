// import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import LogoutIcon from "../../Img/log_out.svg";

export const Header = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}> */}
      <View style={styles.titleBox}>
        <Text style={styles.title}>Публікації</Text>
      </View>
      {/* </View> */}

      <Pressable style={styles.logOutBox}>
        <LogoutIcon width={24} height={24} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 88,
    // height: 44,
    // paddingTop: 44,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  titleBox: {
    width: 175,
    height: 44,
    paddingBottom: 11,
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    fontFamily: "RobotoM",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
    color: "#212121",
    textAlign: "center",
  },
  logOutBox: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  // header: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: "100%",
  //   height: 44,
  // },
});
