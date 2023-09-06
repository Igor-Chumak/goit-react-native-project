import { StyleSheet, Text, View } from "react-native";

export const RegistrationForm = () => {
  return (
    <View style={styles.wrapForm}>
      <Text style={styles.text}>Registration Form</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapForm: {
    // flex: 1,
    // justifyContent: "flex-end",
    borderWidth: 1,
    borderColor: "red",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "red",
    textAlign: "center",
  },
});
