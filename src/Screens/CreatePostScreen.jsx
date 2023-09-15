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
    // <Pressable
    //   onPress={Keyboard.dismiss}
    //   // style={styles.wrapProvider}
    // >
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1 }}>
        <ContentBox>
          <CreateContentBlock title={"Завантажте фото"} source={imgDef} />
          <CreateContentForm />
          <ToolBar />
        </ContentBox>
      </ScrollView>
    </KeyboardAvoidingView>
    // </Pressable>
  );
};

//  return (
{
  /* <Pressable onPress={Keyboard.dismiss} style={styles.wrapProvider}>*/
}
{
  /* <View style={styles.container}> */
}
{
  /* <KeyboardAvoidingView */
}
{
  /* // behavior={Platform.OS == "ios" ? "padding" : "height"} */
}
{
  /* // style={styles.wrapProvider} mentor > */
}
{
  /* <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1 }}> */
}
// <ContentBox>
{
  /* <Pressable onPress={pressPhoto} style={styles.wrapProvider2}> */
}
// <CreateContentBlock title={"Завантажте фото"} source={imgDef} />
{
  /* </Pressable> */
}
{
  /* <CreateContentForm />
      </ContentBox>
      <ToolBar /> */
}
{
  /* </ScrollView> */
}
{
  /* </KeyboardAvoidingView> */
}
{
  /* // </View> */
}
{
  /* // </Pressable> */
}
//   );
// };

const styles = StyleSheet.create({
  containerTest: {
    // flex: 1,
    flexGrow: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "green",
    // backgroundColor: "white",
    // paddingVertical: 32,
    paddingTop: 32,
    // paddingBottom: 32,
    paddingHorizontal: 16,
    gap: 32,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  wrapProvider: {
    flexGrow: 1,
    width: "100%",
    borderWidth: 1,
    borderColor: "blue",
  },
  wrapProvider2: {
    // flexGrow: 1,
    // width: "100%",
    // borderWidth: 1,
    // borderColor: "red",
  },
  container: {
    // flex: 1,
    flexGrow: 1,
    width: "100%",
    backgroundColor: "white",
    // justifyContent: "space-between",
    justifyContent: "flex-start",
    backgroundColor: "green",
    // borderWidth: 1,
    // borderColor: "yellow",
  },
});

export default CreatePostScreen;
