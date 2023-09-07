import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";

export const User = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={{ uri: "https://reactjs.org/logo-og.png" }} style={styles.userPhoto}></Image>
        <View style={styles.textBox}>
          <Text style={styles.userName}>React Native</Text>
          <Text style={styles.userEmail}>native@react.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // height: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",

    borderColor: "rgba(0,0,0,0.3)",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
  },
  box: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    width: 171,
    height: 60,
    marginTop: 9,
    alignItems: "center",
  },
  textBox: {
    marginLeft: 8,
  },
  userName: {
    fontSize: 13,
    // fontWeight: 700,
    fontFamily: "RobotoR",
    lineHeight: 15,
  },
  userEmail: {
    fontFamily: "RobotoR",
    fontSize: 11,
    // fontWeight: 400,
    lineHeight: 13,
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
});
