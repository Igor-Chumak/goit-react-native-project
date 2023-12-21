import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useUserAuth } from "../firebase/authApi";
import { login } from "../store/authSlice";

const INITIAL_STATE = {
  email: "email@email.com", //null,
  password: "password", //null,
};

export const LoginForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { signInUser } = useUserAuth();
  const [email, setEmail] = useState(INITIAL_STATE.email);
  const [password, setPassword] = useState(INITIAL_STATE.password);
  const [passwordHidden, setPasswordHidden] = useState(true);

  const handleSubmit = async () => {
    if (!email || !password) return;
    console.log("state :>> ", { email, password });
    setPasswordHidden(true);
    try {
      const user = await signInUser({
        email,
        password,
      });
      dispatch(
        login({
          email: user.email,
          displayName: user.displayName,
          uid: user.uid,
          avatarUrl: user.photoURL,
        })
      );
      setEmail("");
      setPassword("");
      //   navigation.navigate("Home");
      return;
    } catch (error) {
      console.log("Something went wrong: ", error.message);
    }
    return;
  };

  const toggleVisiblePassword = () => {
    setPasswordHidden(!passwordHidden);
  };

  return (
    <Pressable onPress={Keyboard.dismiss}>
      <View style={styles.wrapForm}>
        <Text style={styles.title}>Увійти</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.wrapProvider}
        >
          <View style={styles.inputBox}>
            <TextInput
              style={styles.textInput}
              autoComplete="email"
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.wrapInputDelete}>
              <TextInput
                style={[styles.inputDelete, styles.textInput]}
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
          <Pressable onPress={() => navigation.navigate("Registration")}>
            <Text style={styles.btnLogIn}>Немає акаунту? Зареєструватися</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapForm: {
    width: "100%",
    // height: 489-34,
    alignItems: "center",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    // paddingBottom: 111,
    paddingBottom: 144,
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
  //
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
