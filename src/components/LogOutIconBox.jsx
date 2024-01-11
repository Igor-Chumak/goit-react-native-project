import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { logout } from "../store/authSlice";
import { authApiAsync } from "../utility/firebase/index";
import LogoutIcon from "../images/log_out.svg";

export const LogOutIconBox = ({ style }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await authApiAsync.signOutUser();
      dispatch(logout());
    } catch (error) {
      console.log("Something went wrong ", error.message);
    }
  };

  return (
    <TouchableOpacity style={[styles.logOutBox, style]} onPress={handleLogout}>
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
