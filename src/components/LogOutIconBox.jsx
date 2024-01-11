import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { logout } from "../store/authSlice";
import { useUserAuth } from "../utility/firebase/authApi";
import LogoutIcon from "../images/log_out.svg";

export const LogOutIconBox = ({ style }) => {
  const dispatch = useDispatch();
  const { signOutUser } = useUserAuth();

  const handleLogout = async () => {
    try {
      await signOutUser();
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
