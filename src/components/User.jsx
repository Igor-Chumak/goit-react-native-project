import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import photoDefault from "../Img/react512.png";

export const User = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.userBox}>
        <Image source={photoDefault} style={styles.userPhoto}></Image>
        <View style={styles.userDataBox}>
          <Text style={styles.userName}>React Native</Text>
          <Text style={styles.userEmail}>native@react.com</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "white",
    paddingVertical: 32,
    paddingHorizontal: 16,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  userBox: {
    width: 171,
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 8,
    alignItems: "center",
    backgroundColor: "white",
    // borderWidth: 1,
    // borderColor: "red",
  },
  userDataBox: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  userName: {
    fontFamily: "RobotoB",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "RobotoR",
    fontSize: 11,
    lineHeight: 13,
    color: "#212121",
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
});
