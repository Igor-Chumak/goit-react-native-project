// import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import BGImage from "./src/Img/Photo_BG.png";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoReg: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMed: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar translucent={false} hidden={false} style="auto" /> */}
      <ImageBackground source={BGImage} resizeMode="cover" style={styles.imagebg}>
        <Text style={styles.text}>App.js</Text>
        <RegistrationScreen />
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
    fontSize: 20,
    fontWeight: "500",
    color: "orange",
    textAlign: "center",
  },
});
