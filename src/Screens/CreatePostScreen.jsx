import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ContentBox, ToolBar, CreateContentBlock, CreateContentForm } from "../components";

// Редагувати фото
import imgDef from "../Img/no_images_gray.png";

const CreatePostScreen = () => {
  const pressedPhoto = (e) => {
    console.log("Pressed photo :>> ");
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1 }}>
          <ContentBox>
            <TouchableOpacity onPress={pressedPhoto} style={{ width: "100%" }}>
              <CreateContentBlock title={"Завантажте фото"} source={imgDef} />
            </TouchableOpacity>
            <CreateContentForm />
            <ToolBar />
          </ContentBox>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerTest: {
    // flex: 1,
    // flexGrow: 1,
    // width: "100%",
    // justifyContent: "flex-start",
    // alignItems: "center",
    // backgroundColor: "green",
    // backgroundColor: "white",
    // paddingVertical: 32,
    // paddingTop: 32,
    // paddingBottom: 32,
    // paddingHorizontal: 16,
    // gap: 32,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  wrapProvider: {
    // flexGrow: 1,
    // width: "100%",
    // borderWidth: 1,
    // borderColor: "blue",
  },
});

export default CreatePostScreen;
