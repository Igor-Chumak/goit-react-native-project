// import { StatusBar } from "expo-status-bar";
import { ImageBackground, PixelRatio, SafeAreaView, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import BGImage from "./src/Img/Photo_BG.png";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";

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
        <LoginScreen />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // borderWidth: 2,
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
