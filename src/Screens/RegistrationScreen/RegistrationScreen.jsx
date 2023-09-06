import { StyleSheet, Text, View } from "react-native";
import { RegistrationForm } from "./RegistrationForm";

export const RegistrationScreen = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <RegistrationForm />
    </View>
  );
};
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
    color: "white",
  },
});
