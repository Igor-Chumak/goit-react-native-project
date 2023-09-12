import { Pressable, StyleSheet } from "react-native";

import GoBackIcon from "../Img/arrow_left.svg";

export const GoBackIconBox = () => {
  return (
    <Pressable style={styles.arrowLeftBox}>
      <GoBackIcon width={24} height={24} />
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
