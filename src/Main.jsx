import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";
import { useDispatch, useSelector } from "react-redux";

import { selectIsLoading, selectIsLoggedIn } from "./store/selectors";
import { useRoute } from "./routes";
// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { login, logout } from "./store/authSlice";

export const Main = () => {
  const dispatch = useDispatch;
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isLoggedIn = "false";

  // useEffect(() => {
  //   console.log("isLoggedIn:", isLoggedIn);
  //   console.log("isLoading :>> ", isLoading);
  // }, []);

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, handleAuthStateChanged);
    return subscriber;
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
      avatarUri: user.photoURL,
    });
    dispatch(
      login({
        email: user.email,
        displayName: user.displayName,
        uid: user.uid,
        avatarUri: user.photoURL,
      })
    );
  }

  const routing = useRoute(isLoggedIn);

  return (
    <>
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
    </>
  );
};
