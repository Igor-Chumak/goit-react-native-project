import { StyleSheet, View } from "react-native";

import { ContentBox, Header, TabBar, User } from "../components";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Header type={"exit"} title={"Публікації"} />
      <ContentBox>
        <User />
      </ContentBox>
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
