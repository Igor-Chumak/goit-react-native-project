import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// import SendIcon from "../Img/send.svg";
import SendIcon from "../Img/arrow_up.svg";

export const InputSearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Коментувати..."
          placeholderTextColor="#BDBDBD"
        />
        <Pressable style={styles.pressIcon}>
          <SendIcon width={10} height={14} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 83,
    // paddingTop: 17,
    paddingBottom: 16,
    // paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    // borderTopWidth: 1,
    // borderColor: "rgba(0,0,0,0.3)",
    backgroundColor: "white",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  inputBox: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  textInput: {
    width: "100%",
    height: 50,
    paddingLeft: 16,
    paddingRight: 44,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    backgroundColor: "#E8E8E8",
    // borderWidth: 1,
    // borderColor: "red",
  },
  wrapInputLocation: {
    position: "relative",
  },
  pressIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 17,
  },
});
