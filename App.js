// import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import BGImage from "./src/Img/Photo_BG.png";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BGImage} resizeMode="cover" style={styles.imagebg}>
        <RegistrationScreen />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  imagebg: {
    // flex: 1,
    // justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
