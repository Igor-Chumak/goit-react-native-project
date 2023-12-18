import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";
import { useSelector } from "react-redux";

import { selectIsLoading, selectAuth, selectAllStore } from "./store/selectors";
import { useRoute } from "./routes";

export const Main = () => {
  const isLoading = useSelector(selectIsLoading);

  const isAuth = useSelector(selectAuth);
  // const all = useSelector(selectAllStore);
  useEffect(() => {
    console.log("isAuth:", isAuth);
  }, []);

  const routing = useRoute(false);
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
