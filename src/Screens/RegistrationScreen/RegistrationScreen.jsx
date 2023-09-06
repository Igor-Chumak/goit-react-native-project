import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RegistrationForm } from "./RegistrationForm";

export const RegistrationScreen = () => {
  return (
    <View style={styles.wrap}>
      <RegistrationForm />
    </View>
  );
};
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
