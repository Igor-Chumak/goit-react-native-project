import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostScreen from "./CreatePostScreen";
import ProfileScreen from "./ProfileScreen";

const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tabs.Navigator initialRouteName="Posts">
      <Tabs.Screen name="Posts" component={PostsScreen} />
      <Tabs.Screen name="CreatePost" component={CreatePostScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
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

// options={{
//   headerShown: "false",
// }}
// options={{
//   headerStyle: {
//     backgroundColor: "#eede95",
//   },
//   title: "Публікації",
//   headerTintColor: "#212121",
//   headerTitleStyle: {
//     fontFamily: "RobotoM",
//     fontSize: 17,
//     lineHeight: 22,
//     letterSpacing: -0.4,
//   },
//   headerRight: () => <LogOutIconBox />,
// }}
