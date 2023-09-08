import * as React from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import photoDefault from "../../Img/react512.png";
import BtnAddIcon from "../../Img/union.svg";

export const RegistrationForm = () => {
  return (
    <View style={styles.wrapForm}>
      <View style={styles.wrapPhoto}>
        <Image source={photoDefault} style={styles.photo} />
        <Pressable style={styles.btnAddBox}>
          <BtnAddIcon width={13} height={13} />
        </Pressable>
      </View>
      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.inputBox}>
        <TextInput style={styles.textInput} placeholder="Логін" placeholderTextColor="#BDBDBD" />
        <TextInput
          style={styles.textInput}
          autoComplete="email"
          placeholder="Адреса електронної пошти"
          placeholderTextColor="#BDBDBD"
        />
        <View style={styles.wrapInputDelete}>
          <TextInput
            style={[styles.InputDelete, styles.textInput]}
            autoComplete="password"
            placeholder="Пароль"
            placeholderTextColor="#BDBDBD"
          />
          <Pressable>
            <Text style={styles.btnShow}>Показати</Text>
          </Pressable>
        </View>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.btnText}>Зареєструватися</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.btnLogIn}>Вже є акаунт? Увійти</Text>
      </Pressable>
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
  wrapPhoto: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    //
    // borderWidth: 1,
    // borderColor: "red",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  btnAddBox: {
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
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
  InputDelete: {
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
});
