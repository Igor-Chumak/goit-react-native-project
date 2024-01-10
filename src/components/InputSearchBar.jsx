import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import SendIcon from "../images/arrow_up.svg";

export const InputSearchBar = ({ newComment = "", setNewComment, handleSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Коментувати..."
          placeholderTextColor="#BDBDBD"
          value={newComment}
          onChangeText={setNewComment}
        />
        <Pressable style={styles.pressIcon} onPress={handleSubmit}>
          <SendIcon width={10} height={14} />
        </Pressable>
      </View>
    </View>
  );
};

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputBox}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Коментувати..."
//           placeholderTextColor="#BDBDBD"
//         />
//         <Pressable style={styles.pressIcon}>
//           <SendIcon width={10} height={14} />
//         </Pressable>
//       </View>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1, //
    marginTop: "auto",
    // position: "absolute",
    // bottom: 0,
    width: "100%",
    height: 83,
    // paddingTop: 17,
    paddingBottom: 16,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    // borderTopWidth: 1,
    // borderColor: "rgba(0,0,0,0.3)",
    // backgroundColor: "white",
    // borderWidth: 1,
    // borderColor: "green",
  },
  inputBox: {
    // marginTop: "auto",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 25,
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
    borderRadius: 25,
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
    // borderWidth: 1,
    // borderColor: "red",
  },
});
