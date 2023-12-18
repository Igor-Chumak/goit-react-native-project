import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";

import { useRoute } from "./Screens/routes_old";

import { useSelector } from "react-redux";
import { selectIsLoading, selectAuth, selectAllStore } from "./store/selectors";

export const Main = () => {
  const isLoading = useSelector(selectIsLoading);

  const isAuth = useSelector(selectAuth);
  // const all = useSelector(selectAllStore);
  useEffect(() => {
    console.log("STATE:", isLoading);
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
