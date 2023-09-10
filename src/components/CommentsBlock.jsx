import { ScrollView, StyleSheet, View } from "react-native";
import { OneComment } from "./OneComment";
import { MyComment } from "./MyComment";

export const CommentsBlock = () => {
  return (
    <ScrollView
      style={styles.contentBoxScroll}
      contentContainerStyle={{ gap: 24 }}
      showsVerticalScrollIndicator={true}
      persistentScrollbar={true}
    >
      {/* <View style={styles.contentBox}> */}
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentBox: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "stretch",
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
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    // alignItems: "stretch",
    // justifyContent: "flex-start",
    borderColor: "rgba(0,0,0,0.3)",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
    gap: 24,
    // borderWidth: 1,
    // borderColor: "orange",
  },
});
