import { Keyboard, Pressable, StyleSheet, View } from "react-native";
import {
  ContentBox,
  Header,
  ContentBlockImage,
  InputSearchBar,
  CommentsBlock,
  ContentScrollBox,
} from "../components";

export const CommentsScreen = () => {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.wrapProvider}>
      <View style={styles.container}>
        <Header type={"left"} title={"Коментарі"} />
        <ContentBox>
          <ContentBlockImage />
          <CommentsBlock />
        </ContentBox>
        <InputSearchBar />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapProvider: {
    flexGrow: 1,
    // width: "100%",
  },
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
