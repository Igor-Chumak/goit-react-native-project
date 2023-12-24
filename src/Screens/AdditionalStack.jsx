import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";
import { GoBackIconBox, HeaderTitle } from "../components";

const AdditionalStack = createStackNavigator();

const AdditionalScreen = () => {
  return (
    <AdditionalStack.Navigator
      initialRouteName="Posts"
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
      <AdditionalStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerLeft: () => <GoBackIconBox />,
          headerTitle: () => <HeaderTitle title={"Коментарі"} />,
        }}
      />
      <AdditionalStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerLeft: () => <GoBackIconBox />,
          headerTitle: () => <HeaderTitle title={"Мапа де робилося фото"} />,
        }}
      />
    </AdditionalStack.Navigator>
  );
};

export default AdditionalScreen;
