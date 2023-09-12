import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import PostsScreen from "./src/Screens/PostsScreen";
import CreatePostsScreen from "./src/Screens/CreatePostsScreen";
import CommentsScreen from "./src/Screens/CommentsScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import HomeScreen from "./src/Screens/HomeScreen";

import { LogOutIconBox } from "./src/components";

// import BGImage from "./src/Img/photo_BG.png";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoR: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoM: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoB: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: {
              // display: "none",
            },
          }}
        />
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "#eede95",
            },
            title: "Публікації",
            headerTintColor: "#212121",
            headerTitleStyle: {
              fontFamily: "RobotoM",
              fontSize: 17,
              lineHeight: 22,
              letterSpacing: -0.4,
            },
            headerRight: () => <LogOutIconBox />,
          }}
        />
      </MainStack.Navigator>
      {/* <PostsScreen /> */}
      {/* <CreatePostsScreen /> */}
      {/* <CommentsScreen /> */}
      {/* <ProfileScreen /> */}
    </NavigationContainer>
  );
}

{
  /* <SafeAreaView style={styles.containerSafe}>
  <ImageBackground source={BGImage} resizeMode="cover" style={styles.imagebg}>
  //  
  </ImageBackground>
</SafeAreaView>; */
}

const styles = StyleSheet.create({
  containerSafe: {
    flexGrow: 1,
    // borderWidth: 1,
    // borderColor: "orange",
  },
  imagebg: {
    height: "100%",
    width: "100%",
  },
});
