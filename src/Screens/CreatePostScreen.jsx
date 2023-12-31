import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { ContentBox, ToolBar, CreateContentBlock, CreateContentForm } from "../components";

const CreatePostScreen = () => {
  const [photoPost, setPhotoPost] = useState(null);
  const [resForm, setResForm] = useState(false);

  const resetForm = () => {
    setPhotoPost(null);
    setResForm(true);
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1 }}>
          <ContentBox>
            <CreateContentBlock photo={photoPost} setPhoto={setPhotoPost} />
            <CreateContentForm
              photoPost={photoPost}
              setPhotoPost={setPhotoPost}
              resForm={resForm}
              setResForm={setResForm}
            />
            <ToolBar resetForm={resetForm} />
          </ContentBox>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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
