import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./Screens/routes_old";
//
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import CommentsScreen from "./Screens/CommentsScreen";
import HomeScreen from "./Screens/HomeScreen";
import MapScreen from "./Screens/MapScreen";

import { GoBackIconBox, HeaderTitle } from "../src/components";

const MainStack = createStackNavigator();

export const Main = () => {
  //   const isAuth = useSelector(selectAllStore);
  //   console.log("isAuth :>> ", isAuth);
  const routing = useRoute();

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          // headerShown: false,
          headerStyle: {
            height: 88,
            backgroundColor: "white",
            borderBottomWidth: 1,
            borderColor: "rgba(0,0,0,0.3)",
          },
          // headerBackImageSource: () => <GoBackIcon width={24} height={24} />,
        }}
      >
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            headerLeft: () => <GoBackIconBox />,
            headerTitle: () => <HeaderTitle title={"Коментарі"} />,
          }}
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={{
            headerLeft: () => <GoBackIconBox />,
            headerTitle: () => <HeaderTitle title={"Мапа де робилося фото"} />,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
