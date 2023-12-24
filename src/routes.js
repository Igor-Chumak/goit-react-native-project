import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import CommentsScreen from "./Screens/CommentsScreen";
import HomeScreen from "./Screens/HomeScreen";
import MapScreen from "./Screens/MapScreen";

import { GoBackIconBox, HeaderTitle } from "./components";

const MainStack = createStackNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
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
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    );
  }
  return <HomeScreen />;
};
