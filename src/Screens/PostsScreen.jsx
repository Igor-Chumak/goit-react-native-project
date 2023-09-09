import { StyleSheet, Text, View } from "react-native";

import { Header, TabBar, User } from "../components";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Header type={"exit"} title={"Публікації"} />
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
