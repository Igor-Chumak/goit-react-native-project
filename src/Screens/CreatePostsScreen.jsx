import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { ContentBox, Header, ToolBar, CreateContentBlock, CreateContentForm } from "../components";

export const CreatePostsScreen = () => {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.wrapProvider}>
      <View style={styles.container}>
        <Header type={"left"} title={"Створити публікацію"} />
        <ContentBox>
          {/* <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.wrapProvider}
          > */}
          <CreateContentBlock title={"Завантажте фото"} />
          <CreateContentForm />
          {/* </KeyboardAvoidingView> */}
        </ContentBox>
        <ToolBar />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapProvider: {
    flexGrow: 1,
    width: "100%",
    // alignItems: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
});
