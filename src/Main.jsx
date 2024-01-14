import { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { onAuthStateChanged } from "firebase/auth";

import { selectIsLoading, selectIsLoggedIn } from "./store/selectors";
import { useRoute } from "./routes";
import { auth } from "./utility/firebase/config";
import { login, logout } from "./store/authSlice";

export const Main = () => {
  const dispatch = useDispatch;
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //
  console.log("isLoggedIn 1:>> ", isLoggedIn);
  useEffect(() => {
    console.log("isLoggedIn 2:>> ", isLoggedIn);
  });
  //

  useEffect(() => {
    // const subscriber = onAuthStateChanged(auth, handleAuthStateChanged);
    const subscriber = async (handleAuthStateChanged = () => {}) => {
      onAuthStateChanged(auth, (user) => {
        handleAuthStateChanged(user);
      });
    };
    return () => {
      subscriber();
    };
  }, []);

  function handleAuthStateChanged(user) {
    if (!user) {
      dispatch(logout());
      return;
    }
    console.log("user in Main :>> ", {
      email: user.email,
      displayName: user.displayName,
      uid: user.uid,
      avatarUrl: user.photoURL,
    });
    dispatch(
      login({
        email: user.email,
        displayName: user.displayName,
        uid: user.uid,
        avatarUrl: user.photoURL,
      })
    );
    return;
  }

  const routing = useRoute(isLoggedIn);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>{routing}</NavigationContainer>
      <Spinner
        visible={isLoading}
        animation={"slide"}
        size={"large"}
        textContent={"Loading..."}
        color={"#FF6C00"}
        textStyle={{ color: "#FF6C00" }}
        overlayColor={"rgba(0, 0, 0, 0.7)"}
      />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   containerSafe: {
// borderWidth: StyleSheet.hairlineWidth,
// borderWidth: 1,
// borderColor: "orange",
//   },
// });
