import { ImageBackground, Pressable, Keyboard, StyleSheet, View } from "react-native";
import { LoginForm } from "../components";
//
import BGImage from "../images/photo_BG.png";

const LoginScreen = () => {
  return (
    <Pressable onPress={Keyboard.dismiss}>
      <ImageBackground source={BGImage} resizeMode="cover" style={styles.imagebg}>
        <View style={styles.wrap}>
          <LoginForm />
        </View>
      </ImageBackground>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  containerSafe: {
    flexGrow: 1,
  },
  imagebg: {
    height: "100%",
    width: "100%",
  },
  wrap: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default LoginScreen;
