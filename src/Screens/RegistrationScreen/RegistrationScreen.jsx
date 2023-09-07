import { StyleSheet, Text, View } from "react-native";
import { RegistrationForm } from "./RegistrationForm";

export const RegistrationScreen = () => {
  return (
    <View style={styles.wrap}>
      {/* <Text style={styles.text}>Registration Screen</Text> */}
      <RegistrationForm />
    </View>
  );
};
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
    // borderWidth: 2,
    // borderColor: "blue",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "blue",
    textAlign: "center",
  },
});
