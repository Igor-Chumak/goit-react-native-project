import React, { useState, useReducer } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { userAuth } from "../hooks";
import { ContentBox, ToolBar, CreateContentBlock, CreateContentForm } from "../components";

const INITIAL_STATE = {
  title: null,
  photoUrl: null,
  location: null,
  coords: { longitude: 0, latitude: 0 },
  likes: 0,
  comments: [],
  owner: null,
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
  const { uid: userUid } = userAuth;
  const [state, localDispatch] = useReducer(localReducer, INITIAL_STATE);
  //
  // const [photoPostUrl, setPhotoPostUrl] = useState(null);
  const [isActiveBtnResetForm, setActiveBtnResetForm] = useState(false);

  const handleSubmit = async () => {
    // if (!state.title || !state.photoUrl) return;
    // if (!title || !location) return;
    // localDispatch({ type: "update", payload: { title } });
    // navigation.navigate("Posts");
    // resetForm();
    localDispatch({ type: "clear" });
    console.log("state :>> ", state);
    navigation.navigate("Map", { ...state.coords });
    return;
  };

  // const resetForm = () => {
  //   localDispatch({ type: "clear" });
  //   // setPhotoPostUrl(null);
  //   setActiveBtnResetForm(true);
  // };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1 }}>
          <ContentBox>
            <CreateContentBlock
              photo={state.photoUrl}
              // photo={photoPostUrl}
              // setPhoto={setPhotoPostUrl}
              localDispatch={localDispatch}
            />
            <CreateContentForm
              state={state}
              handleSubmit={handleSubmit}
              localDispatch={localDispatch}
              // photoPost={photoPostUrl}
              // setPhotoPost={setPhotoPostUrl}
              // isActiveBtnResetForm={isActiveBtnResetForm}
              // setActiveBtnResetForm={setActiveBtnResetForm}
            />
            <ToolBar resetForm={() => localDispatch({ type: "clear" })} />
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
