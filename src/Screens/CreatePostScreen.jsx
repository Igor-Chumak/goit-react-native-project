import React, { useState, useReducer } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { userAuth } from "../hooks";
import firebaseApiAsync from "../utility/firebase/firebaseApi";
import storageApiAsync from "../utility/firebase/storageApi";
import { postNoPhoto } from "../data";
import { ContentBox, ToolBar, CreateContentBlock, CreateContentForm } from "../components";

const INITIAL_STATE = {
  title: null,
  photoUrl: null,
  location: null,
  coords: { longitude: 0, latitude: 0 },
  likes: 0,
  comments: 0,
};

function localReducer(state, { type, payload }) {
  switch (type) {
    case "update":
      return { ...state, ...payload };
    case "clear":
      return { ...state, ...INITIAL_STATE };
  }
}

const CreatePostScreen = () => {
  const navigation = useNavigation();
  const { uid } = userAuth();
  const [state, localDispatch] = useReducer(localReducer, INITIAL_STATE);

  const handleSubmit = async () => {
    // handleResetForm();
    console.log("Post state :>> ", state);
    // const { id } = await firebaseApiAsync.addPost(uid, { ...state, photoUrl: postNoPhoto });
    const doc = await firebaseApiAsync.addPost(uid, state);
    console.log("doc :>> ", doc);
    // const uploadUrl = await storageApiAsync.uploadFileToStorage({
    //   collection: "posts",
    //   name: `postId_${id}.userUid_${uid}`,
    //   fileUri: state.photoUrl,
    // });
    // console.log("Post uploadUrl :>> ", uploadUrl);
    navigation.navigate("Posts");
    return;
  };

  const handleResetForm = () => {
    localDispatch({ type: "clear" });
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1 }}>
          <ContentBox>
            <CreateContentBlock photo={state.photoUrl} localDispatch={localDispatch} />
            <CreateContentForm
              state={state}
              handleSubmit={handleSubmit}
              localDispatch={localDispatch}
            />
            <ToolBar resetForm={handleResetForm} />
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
