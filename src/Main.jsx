import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";
import { useDispatch, useSelector } from "react-redux";

import { selectIsLoading, selectAuth } from "./store/selectors";
import { useRoute } from "./routes";

export const Main = () => {
  const dispatch = useDispatch;
  const isLoading = useSelector(selectIsLoading);
  const isAuth = useSelector(selectAuth);
  
  useEffect(() => {
    console.log("isAuth:", isAuth);
    console.log("isLoading :>> ", isLoading);
  }, []);

  const routing = useRoute(isAuth);

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
