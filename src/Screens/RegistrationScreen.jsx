import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { RegistrationForm } from "../components";

import BGImage from "../Img/photo_BG.png";

const RegistrationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerSafe}>
      <ImageBackground source={BGImage} resizeMode="cover" style={styles.imagebg}>
        <View style={styles.wrap}>
          <RegistrationForm navigation={navigation} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
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
  wrap: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
    // borderWidth: 2,
    // borderColor: "blue",
  },
  text: {
    // fontFamily: "RobotoM",
    // fontSize: 20,
    // color: "blue",
    // textAlign: "center",
  },
});

export default RegistrationScreen;
