import { useEffect, useReducer, useState } from "react";
import { Pressable, TouchableOpacity, StyleSheet, Text, TextInput, View } from "react-native";

import MapPinIcon from "../Img/map-pin.svg";

export const CreateContentForm = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [disable, setDisable] = useState(true);
  const [state, dispatch] = useReducer(reducer, { title, location });

  function reducer(state, action) {
    if (action.type === "submitPublication") return { title, location };
  }

  useEffect(() => {
    setTitle("");
    setLocation("");
    console.log("Publication :", state);
  }, [state]);

  useEffect(() => {
    if (!title || !location) return setDisable(true);
    setDisable(false);
  }, [title, location]);

  const handleSubmit = () => {
    if (!title || !location) return;
    return dispatch({ type: "submitPublication" });
  };

  return (
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
          <View style={styles.locationIconBox}>
            <MapPinIcon width={24} height={24} />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.button, { backgroundColor: disable ? "#E8E8E8" : "#FF6C00" }]}
        onPress={handleSubmit}
        disabled={disable}
      >
        <Text style={[styles.btnText, { color: disable ? "#BDBDBD" : "white" }]}>Опублікувати</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapForm: {
    //mentor
    // flex: 1,
    //
    width: "100%",
    // alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
    gap: 32,
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
