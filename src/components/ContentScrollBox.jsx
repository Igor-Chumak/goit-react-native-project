import { ScrollView, StyleSheet } from "react-native";

export const ContentScrollBox = ({ children }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.child}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
    backgroundColor: "white",
    paddingVertical: 32,
    paddingHorizontal: 16,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  child: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
