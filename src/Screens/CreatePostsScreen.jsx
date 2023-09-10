import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { ContentBox, Header, ToolBar, CreateContentBlock, CreateContentForm } from "../components";

export const CreatePostsScreen = () => {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.wrapProvider}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.wrapProvider}
        >
          <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1 }}>
            <Header type={"left"} title={"Створити публікацію"} />
            <ContentBox>
              <CreateContentBlock title={"Завантажте фото"} />
              <CreateContentForm />
            </ContentBox>
            <ToolBar />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapProvider: {
    flexGrow: 1,
    width: "100%",
  },
  container: {
    // flex: 1,
    flexGrow: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
});
