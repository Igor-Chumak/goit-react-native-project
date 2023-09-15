import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { ContentBox, ToolBar, CreateContentBlock, CreateContentForm } from "../components";

// Редагувати фото
import imgDef from "../Img/no_images.png";

const CreatePostScreen = (e) => {
  const pressPhoto = () => {
    console.log("Pressed photo :>> ", e.currentTarget);
  };

  // console.log("object :>> ", !imgDef);

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.wrapProvider}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.wrapProvider}
        >
          {/* <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1 }}> */}
          <ContentBox>
            <Pressable onPress={pressPhoto} style={styles.wrapProvider2}>
              <CreateContentBlock title={"Завантажте фото"} source={imgDef} />
            </Pressable>
            <CreateContentForm />
          </ContentBox>
          {/* <ToolBar /> */}
          {/* </ScrollView> */}
        </KeyboardAvoidingView>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapProvider: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "green",
  },
  wrapProvider2: {
    // flexGrow: 1,
    width: "100%",
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    // flex: 1,
    flexGrow: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "yellow",
  },
});

export default CreatePostScreen;
