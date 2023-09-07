import * as React from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import photoDefault from "../../Img/React512.png";
import BtnAddIcon from "../../Img/Union.svg";

export const RegistrationForm = () => {
  return (
    <View style={styles.wrapForm}>
      <View style={styles.wrapPhoto}>
        <Image source={photoDefault} style={styles.photo} />
        <Pressable style={styles.btnAddBox}>
          <BtnAddIcon style={styles.btnAddIcon} />
        </Pressable>
      </View>
      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.inputBox}>
        <TextInput style={styles.textInput} placeholder="Логін" placeholderTextColor="#BDBDBD" />

        <TextInput
          style={styles.textInput}
          placeholder="Адреса електронної пошти"
          placeholderTextColor="#BDBDBD"
        />

        <TextInput style={styles.textInput} placeholder="Пароль" placeholderTextColor="#BDBDBD" />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.btnText}>Зареєструватися</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapForm: {
    width: "100%",
    // height: 549,
    position: "relative",
    alignItems: "center",
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 78,
    // paddingBottom: 20,
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
  btnAddIcon: {
    width: 13,
    height: 13,
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
    // paddingTop: 16,
    // paddingBottom: 15,
    paddingLeft: 16,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    backgroundColor: "#E8E8E8",
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
    fontSize: 16,
    lineHeight: 19,
    color: "white",
    fontFamily: "RobotoR",
  },
});
