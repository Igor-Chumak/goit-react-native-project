import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ContentBox,
  ToolBar,
  CreateContentBlock,
  CreateContentForm,
  GetCamera,
} from "../components";

// import imgDef from "../Img/no_images_gray.png";

const CreatePostScreen = () => {
  const [photoRef, setCameraRef] = useState(null);
  const [onCamera, setOnCamera] = useState(true);

  const closeCamera = (ref) => {
    setOnCamera(false);
    setCameraRef(ref);
  };

  // useEffect(() => {
  //   if (!photoRef) return;
  //   setOnCamera(false);
  // }, [onCamera, photoRef]);

  // const pressedPhoto = () => {
  //   return;
  // };

  return (
    <SafeAreaView>
      {onCamera ? (
        <GetCamera />
      ) : (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1 }}>
            <ContentBox>
              <TouchableOpacity onPress={() => setOnCamera(true)} style={{ width: "100%" }}>
                <CreateContentBlock
                  title={!photoRef ? "Завантажте фото" : "Редагувати фото"}
                  source={photoRef}
                />
              </TouchableOpacity>
              <CreateContentForm />
              <ToolBar />
            </ContentBox>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
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
