import { StyleSheet, TouchableOpacity, View } from "react-native";

import TrashIcon from "../images/trash_toolbar.svg";

export const ToolBar = ({ resetForm }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={resetForm} style={styles.pressIcon}>
        <TrashIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
    width: "100%",
    height: 83,
    paddingTop: 9,
    alignItems: "center",
    borderColor: "rgba(0,0,0,0.3)",
    backgroundColor: "white",
  },
  pressIcon: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    borderRadius: 20,
  },
});
