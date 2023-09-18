import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import GoBackIcon from "../Img/arrow_left.svg";
// import GoBackIcon from "../Img/log_out.svg";

export const GoBackIconBox = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.arrowLeftBox} onPress={() => navigation.goBack()}>
      <GoBackIcon width={24} height={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  arrowLeftBox: {
    position: "absolute",
    left: 16,
    bottom: 10,
  },
});
