import { Pressable, StyleSheet } from "react-native";

import ArrowLeftIcon from "../Img/arrow_left.svg";

export const ArrowLeftIconBox = () => {
  return (
    <Pressable style={styles.arrowLeftBox}>
      <ArrowLeftIcon width={24} height={24} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  arrowLeftBox: {
    position: "absolute",
    left: 16,
    bottom: 10,
  },
});
