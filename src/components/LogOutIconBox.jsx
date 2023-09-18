import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LogoutIcon from "../Img/log_out.svg";

export const LogOutIconBox = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.logOutBox} onPress={() => navigation.navigate("Login")}>
      <LogoutIcon width={24} height={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logOutBox: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
