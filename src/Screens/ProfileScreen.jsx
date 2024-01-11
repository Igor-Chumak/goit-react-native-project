import { useEffect, useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { userAuth } from "../hooks";
import { authApiAsync, firebaseApiAsync } from "../utility/firebase/index";
import { AvatarBox, ContentBlock, LogOutIconBox } from "../components";
import BGImage from "../images/photo_BG.png";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const {
    uid,
    // email,
    displayName,
    // isLoggedIn,
    avatarUrl: avatarUrlCurrentUser,
  } = userAuth();
  // console.log("ProfileScreen userAuth() :>> ", userAuth());

  const isFocused = useIsFocused();
  const [posts, setPosts] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState(avatarUrlCurrentUser);
  const [isFirstRender, setIsFirstRender] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await firebaseApiAsync.getPostsByUserId(uid);
      // console.log("Profile data :>> ", data);
      setPosts(data);
    }
    fetchData();
  }, [isFocused]);

  useEffect(() => {
    if (!isFirstRender) return setIsFirstRender(true);
    async function fetchData() {
      const data = await authApiAsync.updateAvatar(avatarUrl);
      dispatch(
        login({
          avatarUrl: data.photoURL,
        })
      );
      // console.log("useEffect avatar");
    }
    fetchData();
    return setIsFirstRender(false);
  }, [avatarUrl]);

  return (
    <>
      <ImageBackground source={BGImage} resizeMode="cover" style={styles.imagebg}>
        <View style={styles.container}>
          <View style={styles.wrapProfile}>
            <AvatarBox avatarUrl={avatarUrl} setAvatarUrl={setAvatarUrl} disabledChange={false} />
            <LogOutIconBox style={styles.logOutBox} />
            <View style={styles.titleBox}>
              <Text style={styles.title}>{displayName}</Text>
            </View>
            <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1, gap: 32 }}>
              {posts.length > 0 &&
                posts.map((post) => <ContentBlock key={post.id} {...post} disabledChange={true} />)}
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </>
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
