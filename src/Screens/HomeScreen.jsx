import { StyleSheet, TouchableOpacity, View } from "react-native";
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
import GridIcon from "../Img/grid.svg";
import BtnAddIcon from "../Img/union_post.svg";
import UserIcon from "../Img/user.svg";

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
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "white",
        // tabBarActiveBackgroundColor: "red",
        // tabBarInactiveBackgroundColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          paddingTop: 9,
          paddingLeft: 82,
          paddingRight: 81,
          paddingBottom: 34,
          backgroundColor: "white",
          borderTopWidth: 1,
          borderColor: "rgba(0,0,0,0.3)",
        },
        tabBarButton: (props) => <TouchableOpacity {...props} />,
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerTitle: () => <HeaderTitle title={"Публікації"} />,
          headerRight: () => <LogOutIconBox />,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.pressIcon}>
              <GridIcon width={24} height={24} fill={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          headerLeft: () => <GoBackIconBox />,
          headerTitle: () => <HeaderTitle title={"Створити публікацію"} />,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.button}>
              <BtnAddIcon width={13} height={13} />
            </View>
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.pressIcon}>
              <UserIcon width={24} height={24} fill={color} />
            </View>
          ),
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
  pressIcon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 16,
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});

export default HomeScreen;
