import { Pressable, StyleSheet, Text, View } from "react-native";
import LogoutIcon from "../Img/log_out.svg";
import ArrowLeftIcon from "../Img/arrow_left.svg";

export const ArrowLeftIconBox = ({ type, title }) => {
  return (
    <View style={styles.container}>
      {type === "left" && (
        <Pressable style={styles.arrowLeftBox}>
          <ArrowLeftIcon width={24} height={24} />
        </Pressable>
      )}
      <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {type === "exit" && (
        <Pressable style={styles.logOutBox}>
          <LogoutIcon width={24} height={24} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 88,
    // height: 44,
    // paddingTop: 44,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
    // borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    // borderWidth: 2,
    // borderColor: "blue",
  },
  titleBox: {
    width: 175,
    height: 44,
    // paddingBottom: 11,
    justifyContent: "center",
    // alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
  title: {
    fontFamily: "RobotoM",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
    color: "#212121",
    textAlign: "center",
  },
  arrowLeftBox: {
    position: "absolute",
    left: 16,
    bottom: 10,
  },
  logOutBox: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
