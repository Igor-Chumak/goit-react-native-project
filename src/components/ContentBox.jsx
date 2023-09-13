import { StyleSheet, View } from "react-native";

export const ContentBox = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "white",
    // paddingVertical: 32,
    paddingTop: 32,
    // paddingBottom: 32,
    paddingHorizontal: 16,
    gap: 32,
    // borderWidth: 1,
    // borderColor: "blue",
  },
});
