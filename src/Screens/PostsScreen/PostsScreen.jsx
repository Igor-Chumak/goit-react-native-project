import { Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";

import { Header } from "./Header";
import { TabBar } from "./TabBar";
import { User } from "./User";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Header style={styles.header}></Header>
      {/* <User></User> */}
      {/* <TabBar style={styles.footer}></TabBar> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // height: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  header: {
    // // position: "absolute",
    // top: 0,
  },
  footer: {
    // position: "absolute",
    // bottom: 0,
  },
});
