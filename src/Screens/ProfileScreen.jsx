import { useEffect, useReducer, useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch } from "react-redux";
//
import { userAuth } from "../hooks";
import { authApiAsync, firebaseApiAsync } from "../utility/firebase/index";
import { AvatarBox, ContentBlock, LogOutIconBox } from "../components";
import { login } from "../store/authSlice";
import BGImage from "../images/photo_BG.png";

function localReducer(state, { type, payload }) {
  switch (type) {
    case "update":
      return { ...state, ...payload };
    default:
      return console.log("Invalid reducer action type");
  }
}

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const {
    uid,
    // email,
    displayName,
    // isLoggedIn,
    avatarUrl: currentAvatarUrlUser,
  } = userAuth();
  // console.log("ProfileScreen userAuth() :>> ", userAuth());
  const [posts, setPosts] = useState([]);
  const [{ avatarUrl }, localDispatch] = useReducer(localReducer, {
    avatarUrl: currentAvatarUrlUser,
  });
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
    if (!isFirstRender) return;
    async function fetchData() {
      const data = await authApiAsync.updateAvatar(avatarUrl);
      dispatch(
        login({
          avatarUrl: data.photoURL,
        })
      );
    }
    fetchData();
    return setIsFirstRender(false);
  }, [avatarUrl, isFirstRender]);

  return (
    <ImageBackground source={BGImage} resizeMode="cover" style={styles.imagebg}>
      <View style={styles.container}>
        <View style={styles.wrapProfile}>
          <AvatarBox
            avatarUrl={avatarUrl}
            localDispatch={localDispatch}
            disabledChange={false}
            setIsFirstRender={setIsFirstRender}
          />
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
  container: {
    flex: 1,
    justifyContent: "flex-end",
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
