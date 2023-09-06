import { StyleSheet, Text, View } from "react-native";
import { RegistrationForm } from "./RegistrationForm";

export const RegistrationScreen = () => {
  return (
    <View style={styles.wrapScreen}>
      <Text style={styles.text}>Registration Screen</Text>
      <RegistrationForm />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapScreen: {
    flex: 1,
    justifyContent: "flex-end",
    // flexDirection: "column",
    // alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
});
