import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { ContentBox, ToolBar, CreateContentBlock, CreateContentForm } from "../components";

const INITIAL_STATE = {
  photo: null,
  title: null,
  location: null,
  spot: { longitude: 0, latitude: 0 },
};

const CreatePostScreen = () => {
  const [photoPostUrl, setPhotoPostUrl] = useState(null);
  const [resFormActive, setResFormActive] = useState(false);

  const resetForm = () => {
    setPhotoPostUrl(null);
    setResFormActive(true);
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1 }}>
          <ContentBox>
            <CreateContentBlock photo={photoPostUrl} setPhoto={setPhotoPostUrl} />
            <CreateContentForm
              photoPost={photoPostUrl}
              setPhotoPost={setPhotoPostUrl}
              resFormActive={resFormActive}
              setResFormActive={setResFormActive}
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
