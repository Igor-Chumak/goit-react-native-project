import { Image, Pressable, StyleSheet, View } from "react-native";
import {
  ContentBox,
  Header,
  ContentBlockImage,
  InputSearchBar,
  CommentsBlock,
} from "../components";

export const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Header type={"left"} title={"Коментарі"} />
      <ContentBox>
        <ContentBlockImage />
        <CommentsBlock />
        <InputSearchBar />
      </ContentBox>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  wrapProvider: {
    flexGrow: 1,
    width: "100%",
    // alignItems: "center",
  },
});
