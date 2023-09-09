import { StyleSheet, View } from "react-native";

import { Header, ToolBar, User } from "../components";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Header type={"left"} title={"Створити публікацію"} />
      {/* <User /> */}
      <ToolBar />
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
