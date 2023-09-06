import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import photoDefault from "../../Img/React512.png";
import BtnAddIcon from "../../Img/Union.png";

export const RegistrationForm = () => {
  return (
    <View style={styles.wrapForm}>
      <View style={styles.wrapPhoto}>
        <Image source={photoDefault} style={styles.photo} />
        <View style={styles.btnAddBox}>
          <Image source={BtnAddIcon} style={styles.btnAddIcon} />
          {/* <BtnAddIcon style={styles.btnAddIcon} /> */}
          {/* <BtnAddIcon width={13} height={13} /> */}
        </View>
      </View>
      <Text style={styles.text}>Реєстрація</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapForm: {
    width: "100%",
    height: 549,
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
    borderWidth: 1,
    borderColor: "red",
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
    // overflow: "visible",
    // zIndex: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "red",
    // textAlign: "center",
  },
});
