import { StyleSheet, Text, View } from "react-native";

export const HeaderTitle = ({ title }) => {
  return (
    <View style={styles.titleBox}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleBox: {
    // width: 175,
    height: 44,
    justifyContent: "flex-end",
    // alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
  },
  title: {
    fontFamily: "RobotoM",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
    color: "#212121",
    textAlign: "center",
  },
});
