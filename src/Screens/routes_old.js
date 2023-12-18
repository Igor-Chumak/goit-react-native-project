import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import CommentsScreen from "./CommentsScreen";
import HomeScreen from "./HomeScreen";
import MapScreen from "./MapScreen";

import { GoBackIconBox, HeaderTitle } from "../components";

const MainStack = createStackNavigator();

export const useRoute = () => {
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
  );
};
