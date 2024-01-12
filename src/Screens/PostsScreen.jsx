import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { userAuth } from "../hooks";
import { firebaseApiAsync } from "../utility/firebase/index";
import { ContentBlock, ContentBox, User } from "../components";

const PostsScreen = () => {
  const isFocused = useIsFocused();
  const { uid, email, displayName, avatarUrl } = userAuth();
  const [posts, setPosts] = useState([]);
  const [flagRerender, setFlagRerender] = useState(false);
  const [userSelectedId, setUserSelectedId] = useState(null);

  useEffect(() => {
    async function fetchAllData() {
      const data = await firebaseApiAsync.getAllPosts();
      // console.log("Posts data :>> ", data);
      setPosts(data);
    }
    async function fetchIdData() {
      const data = await firebaseApiAsync.getPostsByUserId(uid);
      // console.log("Posts data :>> ", data);
      setPosts(data);
    }
    if (!userSelectedId) {
      fetchAllData();
      // console.log("all");
    } else {
      fetchIdData();
      // console.log("id");
    }
  }, [isFocused, userSelectedId, flagRerender]);

  return (
    <View style={styles.container}>
      <ContentBox>
        <View style={styles.userBoxWrap}>
          <Pressable
            style={[styles.userBox, userSelectedId ? styles.userBoxNoSelected : {}]}
            onPress={() => setUserSelectedId(null)}
          >
            <Text
              style={[styles.btnText, userSelectedId ? { color: "#212121" } : { color: "white" }]}
            >
              All
            </Text>
            <Text
              style={[styles.btnText, userSelectedId ? { color: "#212121" } : { color: "white" }]}
            >
              Posts
            </Text>
          </Pressable>
          <User
            key={uid}
            userId={uid}
            userEmail={email}
            userDisplayName={displayName}
            userAvatarUrl={avatarUrl}
            setUserSelectedId={setUserSelectedId}
            isSelected={userSelectedId}
          />
        </View>
        <ScrollView style={{ height: "100%" }} contentContainerStyle={{ gap: 32 }}>
          {posts.length > 0 &&
            posts.map((post) => (
              <ContentBlock key={post.id} {...post} setFlagRerender={setFlagRerender} />
            ))}
          <View style={{ flex: 1, height: 150 }} />
        </ScrollView>
      </ContentBox>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    // paddingBottom: 51,
    // paddingBottom: 83-32,
  },
  userBoxWrap: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 8,
    alignItems: "center",
    backgroundColor: "white",
    // borderWidth: 2,
    // borderColor: "blue",
  },
  userBox: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 16,
  },
  userBoxNoSelected: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#212121",
  },
  btnText: {
    fontFamily: "RobotoR",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default PostsScreen;
