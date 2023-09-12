import { Pressable, StyleSheet } from "react-native";

import GridIcon from "../Img/grid.svg";

export const GridIconBox = () => {
  return (
    <Pressable style={styles.pressIcon}>
      <GridIcon width={24} height={24} />
    </Pressable>
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
