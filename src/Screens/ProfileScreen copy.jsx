import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ContentBlock, TabBar } from "../components";

import photoDefault from "../Img/react512.png";
import BtnChangeIcon from "../Img/union_x.svg";
import LogoutIcon from "../Img/log_out.svg";

import image1 from "../Img/blank/photo_test_1.jpg";
import image2 from "../Img/blank/photo_test_2.jpg";
import image3 from "../Img/blank/photo_test_3.jpg";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapProfile}>
        <View style={styles.wrapPhoto}>
          <Image source={photoDefault} style={styles.photo} />
          <Pressable style={styles.btnChangeBox}>
            <BtnChangeIcon width={13} height={13} />
          </Pressable>
        </View>
        <Pressable style={styles.logOutBox}>
          <LogoutIcon width={24} height={24} />
        </Pressable>
        <View style={styles.titleBox}>
          <Text style={styles.title}>React Native</Text>
        </View>
        <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1, gap: 32 }}>
          <ContentBlock
            fill={"#FF6C00"}
            source={image1}
            title={"Ліс"}
            comments={"8"}
            likes={"153"}
            location={"Ukraine"}
          />
          <ContentBlock
            fill={"#FF6C00"}
            source={image2}
            title={"Захід на Чорному морі"}
            comments={"3"}
            likes={"200"}
            location={"Ukraine"}
          />
          <ContentBlock
            fill={"#FF6C00"}
            source={image3}
            title={"Старий будиночок у Венеції"}
            comments={"50"}
            likes={"200"}
            location={"Italy"}
          />
        </ScrollView>
      </View>
      <TabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    // paddingBottom: 170,
    // borderWidth: 2,
    // borderColor: "blue",
  },
  wrapProfile: {
    position: "relative",
    // marginTop: 250,
    // marginTop: 120,
    width: "100%",
    maxHeight: "80%",
    paddingTop: 92,
    // paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 83,
    // paddingBottom: 43,
    alignItems: "center",
    gap: 32,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    //
    // borderWidth: 1,
    // borderColor: "red",
  },
  wrapPhoto: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    //
    // borderWidth: 1,
    // borderColor: "red",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  btnChangeBox: {
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
  },
  logOutBox: {
    position: "absolute",
    right: 16,
    top: 22,
    width: 24,
    height: 24,
  },
  titleBox: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontFamily: "RobotoM",
    fontSize: 30,
    letterSpacing: 0.3,
    color: "#212121",
  },
});

export default ProfileScreen;
