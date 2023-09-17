import { Pressable, StyleSheet, View } from "react-native";

import GridIcon from "../Img/grid.svg";

export const GridIconBox = ({ fill }) => {
  return (
    <View style={styles.pressIcon}>
      <GridIcon width={24} height={24} fill={fill} />
    </View>
  );
};

const styles = StyleSheet.create({
  pressIcon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
