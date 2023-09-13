import React from "react";
import { View, StyleSheet, Text } from "react-native";

const App = () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text>OOO</Text>
        </View>
        <View style={styles.box2}>
          <Text>OOO</Text>
        </View>
        <View style={styles.box3}>
          <Text>OOO</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    // flexGrow: 1,
    padding: 50,
    backgroundColor: "yellow",
  },
  container: {
    padding: 10,
    // flex: 1,
    flexGrow: 1,
    // width: "100%",
    // height: "100%",
    gap: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
  },
  box1: {
    flex: 1,
    // flexGrow: 1,
    backgroundColor: "red",
    height: 40,
    width: 40,
    // width: "100%",
  },
  box2: {
    // flex: 1,
    // flexGrow: 1,
    backgroundColor: "green",
    height: 40,
    width: 40,
  },
  box3: {
    // flex: 1,
    // flexGrow: 1,
    backgroundColor: "blue",
    height: 40,
    width: 40,
  },
  boxLabel: {
    minWidth: 80,
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
});

export default App;
