import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUserAuth } from "../firebase/authApi";
import { login } from "../store/authSlice";
import { AvatarBox } from "./AvatarBox";

const INITIAL_STATE = {
  name: "myName",
  email: "email@email.com",
  password: "password",
  avatarUrl: null,
};

export const RegistrationForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { registerUser } = useUserAuth();

  const [name, setName] = useState(INITIAL_STATE.name);
  const [email, setEmail] = useState(INITIAL_STATE.email);
  const [password, setPassword] = useState(INITIAL_STATE.password);
  const [avatarUrl, setAvatarUrl] = useState(INITIAL_STATE.avatarUrl);
  const [passwordHidden, setPasswordHidden] = useState(true);

  // useEffect(() => {
  //   console.log("avatarUrl :>> ", avatarUrl);
  // }, [avatarUrl]);

  const handlePress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      setAvatarUrl(uri);
    } else {
      alert("Nothing selected");
      setAvatarUrl(avatarNothing);
    }
  };

  const handleSubmit = async () => {
    if (!name || !email || !password) return;
    setPasswordHidden(true);
    try {
      const user = await registerUser({
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
      setName(INITIAL_STATE.name);
      setEmail(INITIAL_STATE.email);
      setPassword(INITIAL_STATE.password);
      setAvatarUrl(INITIAL_STATE.avatarUrl);
      return;
    } catch (error) {
      console.log("Something went wrong: ", error.message);
    }
  };

  const toggleVisiblePassword = () => {
    setPasswordHidden(!passwordHidden);
  };

  return (
    <Pressable onPress={Keyboard.dismiss}>
      <View style={styles.wrapForm}>
        <AvatarBox avatarUrl={avatarUrl} setAvatarUrl={setAvatarUrl} />
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
              name="name"
              onChangeText={setName}
            />
            <TextInput
              style={styles.textInput}
              autoComplete="email"
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
              value={email}
              name="email"
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
                name="password"
                onChangeText={setPassword}
              />
              <Pressable onPress={toggleVisiblePassword}>
                <Text style={styles.btnShow}>Показати</Text>
              </Pressable>
            </View>
          </View>
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.btnText}>Зареєструватися</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.btnLogIn}>Вже є акаунт? Увійти</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    </Pressable>
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
