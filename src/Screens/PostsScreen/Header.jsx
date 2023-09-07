// import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import LogoutIcon from "../../Img/log_out.svg";
import ArrowLeftIcon from "../../Img/arrow_left.svg";

export const Header = () => {
  return (
    <View style={styles.headerWrap}>
      <Pressable style={styles.arrowLeftBox}>
        <ArrowLeftIcon width={24} height={24} />
      </Pressable>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Публікації</Text>
      </View>
      <Pressable style={styles.logOutBox}>
        <LogoutIcon width={24} height={24} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrap: {
    width: "100%",
    height: 88,
    // height: 44,
    // paddingTop: 44,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    // borderWidth: 2,
    // borderColor: "blue",
  },
  titleBox: {
    width: 175,
    height: 44,
    // paddingBottom: 11,
    justifyContent: "center",
    // alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
  },
  title: {
    fontFamily: "RobotoM",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
    color: "#212121",
    textAlign: "center",
  },
  arrowLeftBox: {
    position: "absolute",
    left: 16,
    bottom: 10,
  },
  logOutBox: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
