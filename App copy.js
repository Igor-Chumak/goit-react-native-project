import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import BGImage from "./src/Img/photo_BG.png";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import PostsScreen from "./src/Screens/PostsScreen";
import CreatePostsScreen from "./src/Screens/CreatePostsScreen";
import CommentsScreen from "./src/Screens/CommentsScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import HomeScreen from "./src/Screens/HomeScreen";

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
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <ImageBackground source={BGImage} resizeMode="cover" style={styles.imagebg}>
            {/* <RegistrationScreen /> */}
            {/* <LoginScreen /> */}
            {/* <PostsScreen /> */}
            {/* <CreatePostsScreen /> */}
            {/* <CommentsScreen /> */}
            {/* <ProfileScreen /> */}
            <HomeScreen />
          </ImageBackground>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // borderWidth: 1,
    // borderColor: "orange",
  },
  imagebg: {
    height: "100%",
    width: "100%",
  },
  text: {
    // fontFamily: "RobotoM",
    // fontSize: 20,
    // color: "orange",
    // textAlign: "center",
  },
});
