import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostScreen from "./CreatePostScreen";
import ProfileScreen from "./ProfileScreen";
import {
  BtnAddIconBox,
  GoBackIconBox,
  GridIconBox,
  HeaderTitle,
  LogOutIconBox,
  UserIconBox,
} from "../components";

const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={{
        // headerTintColor: "#212121",
        headerTitleAlign: "center",
        headerTitleStyle: {
          // fontFamily: "RobotoM",
          // fontSize: 22,
          // lineHeight: 22,
          // letterSpacing: -0.41,
        },
        headerStyle: {
          height: 88,
          backgroundColor: "white",
          borderBottomWidth: 1,
          borderColor: "rgba(0,0,0,0.3)",
        },
        // tabBarActiveTintColor: "#bd0643",
        // tabBarInactiveTintColor: "#212121",
        // tabBarActiveBackgroundColor: "red",
        // tabBarInactiveBackgroundColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: "absolute",
          height: 83,
          paddingTop: 9,
          paddingLeft: 82,
          paddingRight: 81,
          paddingBottom: 34,
          backgroundColor: "white",
          borderTopWidth: 1,
          borderColor: "rgba(0,0,0,0.3)",
        },
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerTitle: () => <HeaderTitle title={"Публікації"} />,
          headerRight: () => <LogOutIconBox />,
          tabBarIcon: ({ focused, color, size }) => <GridIconBox />,
        }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          headerLeft: () => <GoBackIconBox />,
          headerTitle: () => <HeaderTitle title={"Створити публікацію"} />,
          tabBarIcon: ({ focused, color, size }) => <BtnAddIconBox />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => <UserIconBox />,
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingBottom: 51,
    // paddingBottom: 83-32,
    // borderWidth: 2,
    // borderColor: "blue",
  },
});

export default HomeScreen;
