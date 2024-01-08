import { StyleSheet, View } from "react-native";

export const ContentBox = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexGrow: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 32,
    paddingHorizontal: 16,
    gap: 32,
    // borderWidth: 1,
    // borderColor: "blue",
  },
});
