import React, { useState, useEffect, useReducer } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ContentBox, ToolBar, CreateContentBlock } from "../components";
// form
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import MapPinIcon from "../images/map-pin.svg";

const INITIAL_STATE = {
  photo: null,
  title: null,
  location: null,
  position: { longitude: 0, latitude: 0 },
};

const CreatePostScreen = () => {
  const navigation = useNavigation();
  const [photoPost, setPhotoPost] = useState(INITIAL_STATE.photo);
  const [resForm, setResForm] = useState(false);
  //form
  const [title, setTitle] = useState(INITIAL_STATE.title);
  const [location, setLocation] = useState(INITIAL_STATE.location);
  const [disable, setDisable] = useState(true);
  const [position, setPosition] = useState(INITIAL_STATE.position);
  const [state, dispatch] = useReducer(reducer, { title, location, photo: photoPost, position });

  // u
  useEffect(() => {
    (async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();
        setHasPermission(status === "granted");
        console.log("location status", status);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  //

  const resetForm = () => {
    setPhotoPost(null);
    setResForm(true);
  };

  function reducer(state, action) {
    if (action.type === "submitPublication") return { title, location, photo: photoPost, position };
  }

  useEffect(() => {
    setTitle("");
    setLocation("");
    setPhotoPost(null);
    setResForm(false);
    setPosition(null);
    console.log("Publication :", state);
  }, [state, resForm]);

  useEffect(() => {
    if (!title || !location || !photoPost) return setDisable(true);
    setDisable(false);
  }, [title, location, photoPost]);

  const definePosition = async () => {
    console.log("location define");
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
    console.log("location status", status);
    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setPosition(coords);
    return coords;
  };

  const handleSubmit = async () => {
    if (!title || !location) return;
    const locs = await definePosition();
    console.log("locs :>> ", locs);
    dispatch({ type: "submitPublication" });
    // navigation.navigate("Posts");
    navigation.navigate("Map", { ...locs });
    return;
  };
  //

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1 }}>
          <ContentBox>
            <CreateContentBlock photo={photoPost} setPhoto={setPhotoPost} />
            <>
              <View style={styles.wrapForm}>
                <View style={styles.inputBox}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Назва..."
                    placeholderTextColor="#BDBDBD"
                    value={title}
                    onChangeText={setTitle}
                    editable={true}
                  />
                  <View style={styles.wrapInputLocation}>
                    <TextInput
                      style={[styles.textInput, styles.inputLocation]}
                      placeholder="Місцевість..."
                      placeholderTextColor="#BDBDBD"
                      value={location}
                      onChangeText={setLocation}
                      editable={true}
                    />
                    <TouchableOpacity
                      style={styles.locationIconBox}
                      onPress={() => navigation.navigate("Map")}
                    >
                      <MapPinIcon width={24} height={24} />
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: disable ? "#E8E8E8" : "#FF6C00" }]}
                  onPress={handleSubmit}
                  disabled={disable}
                >
                  <Text style={[styles.btnText, { color: disable ? "#BDBDBD" : "white" }]}>
                    Опублікувати
                  </Text>
                </TouchableOpacity>
              </View>
            </>
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
  //
  wrapForm: {
    width: "100%",
    // alignItems: "center",
    gap: 32,
    // borderWidth: 1,
    // borderColor: "red",
  },
  // wrapProvider: {
  // flex: 1,
  // flexGrow: 1,
  // width: "100%",
  // alignItems: "center",
  // },
  inputBox: {
    width: "100%",
    gap: 16,
    // marginBottom: 32,
  },
  //
  textInput: {
    width: "100%",
    height: 50,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    backgroundColor: "#E8E8E8",
  },
  wrapInputLocation: {
    position: "relative",
  },
  inputLocation: {
    paddingLeft: 28,
  },
  locationIconBox: {
    position: "absolute",
    top: 13,
    left: 2,
  },
  button: {
    width: "100%",
    height: 51,
    // paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  btnText: {
    // width: 120,
    fontFamily: "RobotoR",
    fontSize: 16,
    lineHeight: 19,
    color: "white",
  },
});

export default CreatePostScreen;
