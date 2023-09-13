import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import GoBackIcon from "../Img/arrow_left.svg";

export const GoBackIconBox = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.arrowLeftBox} onPress={() => navigation.goBack()}>
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
