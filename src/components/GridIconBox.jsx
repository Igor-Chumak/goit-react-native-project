import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import GridIcon from "../Img/grid.svg";

export const GridIconBox = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.pressIcon} onPress={() => navigation.navigate("Posts")}>
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
