import { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
//
import { login } from "../store/authSlice";
import { authApiAsync } from "../utility/firebase/index";
import { AvatarBox } from "./AvatarBox";

function localReducer(state, { type, payload }) {
  switch (type) {
    case "update":
      return { ...state, ...payload };
    case "clear":
      return { ...state, ...INITIAL_STATE };
    default:
      return console.log("Invalid reducer action type");
  }
}

const INITIAL_STATE = {
  name: "myName8", //null,
  email: "email8@email.com", // null,
  password: "password", // null,
  avatarUrl: null,
};

export const RegistrationForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { params } = useRoute();
  const [{ name, email, password, avatarUrl }, localDispatch] = useReducer(localReducer, {
    ...INITIAL_STATE,
  });
  const [passwordHidden, setPasswordHidden] = useState(true);

  useEffect(() => {
    if (!params) return;
    localDispatch({ type: "update", payload: { ...params } });
  }, [params]);

  const handleSubmit = async () => {
    if (!name || !email || !password) return;
    setPasswordHidden(true);
    try {
      const user = await authApiAsync.registerUser({
        email,
        password,
        displayName: name,
        photoURL: avatarUrl,
      });
      dispatch(
        login({
          email: user.email,
          displayName: user.displayName,
          uid: user.uid,
          avatarUrl: user.photoURL,
        })
      );
      localDispatch({ type: "clear" });
      return;
    } catch (error) {
      console.log("Something went wrong: ", error.message);
      if (error.message === "Firebase: Error (auth/email-already-in-use).")
        return handleErrIsUserExist();
    }
  };

  function handleErrIsUserExist() {
    alert(`User with e-mail ${email} exist. You will be redirected to a page for LogIn`);
    return navigation.navigate("Login", { email, password });
  }

  const toggleVisiblePassword = () => {
    setPasswordHidden(!passwordHidden);
  };

  return (
    <View style={styles.wrapForm}>
      <AvatarBox avatarUrl={avatarUrl} localDispatch={localDispatch} />
      <Text style={styles.title}>Реєстрація</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.wrapProvider}
      >
        <View style={styles.inputBox}>
          <TextInput
            style={styles.textInput}
            placeholder="Логін"
            placeholderTextColor="#BDBDBD"
            value={name}
            onChangeText={(text) => localDispatch({ type: "update", payload: { name: text } })}
          />
          <TextInput
            style={styles.textInput}
            autoComplete="email"
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#BDBDBD"
            value={email}
            onChangeText={(text) => localDispatch({ type: "update", payload: { email: text } })}
          />
          <View style={styles.wrapInputDelete}>
            <TextInput
              style={[styles.inputDelete, styles.textInput]}
              autoComplete="password"
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={passwordHidden}
              value={password}
              onChangeText={(text) =>
                localDispatch({ type: "update", payload: { password: text } })
              }
            />
            <Pressable onPress={toggleVisiblePassword}>
              <Text style={styles.btnShow}>Показати</Text>
            </Pressable>
          </View>
        </View>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.btnText}>Зареєструватися</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Login", { email, password })}>
          <Text style={styles.btnLogIn}>Вже є акаунт? Увійти</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapForm: {
    width: "100%",
    // height: 549-34,
    position: "relative",
    alignItems: "center",
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 78,
    // paddingBottom: 45,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    //
    // borderWidth: 1,
    // borderColor: "red",
  },
  title: {
    marginBottom: 32,
    fontFamily: "RobotoM",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.2,
    color: "#212121",
    textAlign: "center",
  },
  wrapProvider: {
    width: "100%",
    alignItems: "center",
  },
  inputBox: {
    width: "100%",
    gap: 16,
    marginBottom: 43,
  },
  textInput: {
    width: "100%",
    height: 50,
    // marginBottom: 16,
    // borderWidth: 1,
    paddingLeft: 16,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    backgroundColor: "#E8E8E8",
  },
  wrapInputDelete: {
    position: "relative",
    // borderWidth: 1,
    // borderColor: "red",
  },
  inputDelete: {
    paddingRight: 90,
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
    height: 51,
    marginBottom: 16,
    // paddingVertical: 16,
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
});
