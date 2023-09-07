import { StyleSheet, Text, View } from "react-native";
import { LoginForm } from "./LoginForm";

export const LoginScreen = () => {
  return (
    <View style={styles.wrap}>
      {/* <Text style={styles.text}>LogIn Screen</Text> */}
      <LoginForm />
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
    fontFamily: "RobotoM",
    fontSize: 20,
    color: "blue",
    textAlign: "center",
  },
});
