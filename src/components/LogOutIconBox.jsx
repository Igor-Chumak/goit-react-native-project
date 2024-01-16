import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
//
import { authThunk } from "../store/index";
import LogoutIcon from "../images/log_out.svg";

export const LogOutIconBox = ({ style }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={[styles.logOutBox, style]}
      onPress={() => dispatch(authThunk.logOut())}
    >
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
