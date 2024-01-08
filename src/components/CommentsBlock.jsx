import { ScrollView, StyleSheet, View } from "react-native";
import { OneComment } from "./OneComment";

export const CommentsBlock = () => {
  return (
    <View style={styles.contentBox}>
      {/* <View onStartShouldSetResponder={() => true}> */}
      <OneComment />
      <OneComment type="my" />
      <OneComment />
      <OneComment type="my" />
      <OneComment />
      <OneComment type="my" />
    </View>
  );
};

//   return (
//     {/*<ScrollView style={styles.contentBoxScroll} contentContainerStyle={styles.child}>*/}
//       <View style={styles.contentBox}>
//         {/* <View onStartShouldSetResponder={() => true}> */}
//         <OneComment />
//         <OneComment />
//         <OneComment />
//         <OneComment />
//         <OneComment />
//       </View>
//     {/* </ScrollView> */}
//   );
// };

const styles = StyleSheet.create({
  contentBox: {
    // flex: 1,
    // flexGrow: 1,
    width: "100%",
    backgroundColor: "white",
    // alignItems: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "rgba(0,0,0,0.3)",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
    gap: 24,
    // borderWidth: 1,
    // borderColor: "orange",
  },
  contentBoxScroll: {
    // flexGrow: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    // alignItems: "stretch",
    // justifyContent: "flex-start",
    borderColor: "rgba(0,0,0,0.3)",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
    // gap: 24,
    // borderWidth: 1,
    // borderColor: "orange",
  },
  child: {
    flexGrow: 1,
    gap: 24,
  },
});
