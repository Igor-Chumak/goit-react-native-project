import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { AvatarBox, ContentBlock, LogOutIconBox } from "../components";
import { userAuth } from "../hooks";

import BGImage from "../images/photo_BG.png";
// test
import image1 from "../images/blank/photo_test_1.jpg";
import image2 from "../images/blank/photo_test_2.jpg";
import image3 from "../images/blank/photo_test_3.jpg";

//
import firebaseApiAsync from "../firebase/firebaseApi";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";

const ProfileScreen = () => {
  const {
    uid,
    // email,
    displayName,
    // isLoggedIn,
    avatarUrl,
  } = userAuth();
  //
  const { getPostsByUserId } = firebaseApiAsync;
  const [posts, setPosts] = useState([]);
  const isFocused = useIsFocused();

  useEffect(
    (isFocused) => {
      async function fetchData() {
        const data = await getPostsByUserId(uid);
        setPosts(data);
      }
      fetchData();
    },
    [isFocused]
  );

  return (
    <SafeAreaView style={styles.containerSafe}>
      <ImageBackground source={BGImage} resizeMode="cover" style={styles.imagebg}>
        <View style={styles.container}>
          <View style={styles.wrapProfile}>
            <AvatarBox avatarUrl={avatarUrl} disabledChange={true} />
            <LogOutIconBox style={styles.logOutBox} />
            <View style={styles.titleBox}>
              <Text style={styles.title}>{displayName}</Text>
            </View>
            <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1, gap: 32 }}>
              {posts.map((post) => (
                <ContentBlock key={post.id} {...post} />
              ))}
              <ContentBlock
                fill={"#FF6C00"}
                source={image2}
                title={"Захід на Чорному морі"}
                comments={"3"}
                likes={"200"}
                location={"Ukraine"}
              />
            </ScrollView>
          </View>
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
  container: {
    flex: 1,
    justifyContent: "flex-end",
    // borderWidth: 2,
    // borderColor: "blue",
  },
  wrapProfile: {
    position: "relative",
    width: "100%",
    maxHeight: "80%",
    paddingTop: 92,
    paddingHorizontal: 16,
    // paddingBottom: 43,
    alignItems: "center",
    gap: 32,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // borderWidth: 1,
    // borderColor: "red",
  },
  // wrapPhoto: {
  //   position: "absolute",
  //   width: 120,
  //   height: 120,
  //   top: -60,
  //   backgroundColor: "#F6F6F6",
  //   borderRadius: 16,
  //   // borderWidth: 1,
  //   // borderColor: "red",
  // },
  // photo: {
  //   width: "100%",
  //   height: "100%",
  // },
  // btnChangeBox: {
  //   position: "absolute",
  //   bottom: 14,
  //   right: -12,
  //   width: 25,
  //   height: 25,
  //   backgroundColor: "white",
  //   borderRadius: 12,
  //   borderWidth: 1,
  //   borderColor: "#E8E8E8",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  logOutBox: {
    right: 16,
    top: 22,
    bottom: 0,
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
