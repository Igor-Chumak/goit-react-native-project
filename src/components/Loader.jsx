import { ActivityIndicator, StyleSheet, View } from "react-native";

export const Loader = ({ isLoading }) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#FF6C00" animating={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
