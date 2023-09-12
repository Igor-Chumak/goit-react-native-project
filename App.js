// import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import BGImage from "./src/Img/photo_BG.png";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";
import { PostsScreen } from "./src/Screens/PostsScreen";
import { CreatePostsScreen } from "./src/Screens/CreatePostsScreen";
import { CommentsScreen } from "./src/Screens/CommentsScreen";
import { ProfileScreen } from "./src/Screens/ProfileScreen";
import { HomeScreen } from "./src/Screens/HomeScreen";

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
    <SafeAreaView style={styles.container}>
      {/* <StatusBar translucent={false} hidden={false} style="auto" /> */}
      <ImageBackground source={BGImage} resizeMode="cover" style={styles.imagebg}>
        {/* <Text style={styles.text}>App.js</Text> */}
        {/* <RegistrationScreen /> */}
        {/* <LoginScreen /> */}
        {/* <PostsScreen /> */}
        {/* <CreatePostsScreen /> */}
        {/* <CommentsScreen /> */}
        <ProfileScreen />
        {/* <HomeScreen /> */}
      </ImageBackground>
    </SafeAreaView>
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
    fontFamily: "RobotoM",
    fontSize: 20,
    color: "orange",
    textAlign: "center",
  },
});
