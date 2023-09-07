import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Header } from "./Header";
import { TabBar } from "./TabBar";
import { User } from "./User";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <User />
      <TabBar />
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
});
