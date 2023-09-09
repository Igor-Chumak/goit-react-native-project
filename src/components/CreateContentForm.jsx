import { useEffect, useReducer, useState } from "react";
import { Image, Keyboard, Pressable, StyleSheet, Text, View } from "react-native";

import mapPinIcon from "../Img/map-pin.svg";

export const CreateContentForm = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [state, dispatch] = useReducer(reducer, { title, location });

  function reducer(state, action) {
    if (action.type === "submitPublication") return { title, location };
  }

  useEffect(() => {
    setTitle("");
    setLocation("");
    console.log("Publication :", state);
  }, [state]);

  const handleSubmit = () => {
    if (!title || !location) return;
    return dispatch({ type: "submitPublication" });
  };

  return (
    // <Pressable onPress={Keyboard.dismiss} style={styles.contentBox}>
    // <View style={styles.wrapForm}>
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.wrapProvider}
    >
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Назва..."
          placeholderTextColor="#BDBDBD"
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.wrapInputLocation}>
          <TextInput
            style={[styles.textInput, styles.inputLocation]}
            autoComplete="password"
            placeholder="Пароль"
            placeholderTextColor="#BDBDBD"
            secureTextEntry={passwordHidden}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable onPress={toggleVisiblePassword}>
            <Text style={styles.btnShow}>Показати</Text>
          </Pressable>
        </View>
      </View>
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.btnText}>Увійти</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.btnLogIn}>Немає акаунту? Зареєструватися</Text>
      </Pressable>
    </KeyboardAvoidingView>
    // </View>
    /* </Pressable> */
  );
};

const styles = StyleSheet.create({
  wrapForm: {
    // width: "100%",
    // alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
  wrapProvider: {
    width: "100%",
    alignItems: "center",
  },
  inputBox: {
    width: "100%",
    gap: 16,
    marginBottom: 32,
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
    // borderWidth: 1,
    // borderColor: "red",
  },
  InputDelete: {
    paddingLeft: 16,
  },
  btnShow: {
    position: "absolute",
    top: -36,
    right: 16,
    width: 72,
    height: 22,
    fontFamily: "RobotoR",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    // borderWidth: 1,
    // borderColor: "#1B4371",
  },
  button: {
    width: "100%",
    // height: 51,
    marginBottom: 16,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  btnText: {
    // width: 120,
    fontFamily: "RobotoR",
    fontSize: 16,
    lineHeight: 19,
    color: "white",
  },
  btnLogIn: {
    // width: 159,
    fontFamily: "RobotoR",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  //
  contentBox: {
    marginBottom: 32,
    width: "100%",
    justifyContent: "flex-start",
    gap: 8,
    alignItems: "center",
    backgroundColor: "white",
    // borderWidth: StyleSheet.hairlineWidth,
  },
  contentImageBox: {
    width: "100%",
    height: 240,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: "blue",
  },
  contentImage: {
    width: "100%",
    height: 240,
    resizeMode: "center",
  },
  contentTitleBox: {
    width: "100%",
  },
  contentTitle: {
    fontFamily: "RobotoM",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  icon_Box: {
    width: 60,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
  },
});
