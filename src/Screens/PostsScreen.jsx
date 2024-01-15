import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { userAuth } from "../hooks";
import { storeThunk } from "../store";
import { setMode } from "../store/storSlice";
import { selectPosts, selectUserSelectedId, selectUsersList } from "../store/selectors";
import { ContentBlock, ContentBox, User } from "../components";

const PostsScreen = () => {
  const dispatch = useDispatch();
  const { uid, email, displayName, avatarUrl } = userAuth();
  const posts = useSelector(selectPosts);
  const [flagRerender, setFlagRerender] = useState(false);
  const usersList = useSelector(selectUsersList);
  const userSelectedId = useSelector(selectUserSelectedId);
  const [isBlocked, setIsBlocked] = useState(false);

  useFocusEffect(
    useCallback(() => {
      dispatch(storeThunk.getAllUser());
      return () => {};
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      if (!userSelectedId) {
        dispatch(storeThunk.getAllPosts());
      } else {
        dispatch(storeThunk.getPostsByUserId(userSelectedId));
      }
      setIsBlocked(true);
      return () => {
        setIsBlocked(false);
      };
    }, [userSelectedId, flagRerender])
  );

  return (
    <View style={styles.container}>
      <ContentBox>
        <View style={styles.userBoxWrap}>
          <Pressable
            style={[styles.userBox, userSelectedId ? styles.userBoxNoSelected : {}]}
            onPress={() => dispatch(setMode({ userSelectedId: null }))}
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
          {isBlocked &&
            usersList.length > 0 &&
            usersList.map((user) => (
              <User
                key={user.id}
                userId={user.id}
                userEmail={user.email}
                userDisplayName={user.displayName}
                userAvatarUrl={user.photoURL}
                dispatch={dispatch}
                isSelected={userSelectedId === user.id ? true : false}
              />
            ))}
        </View>
        <ScrollView style={{ height: "100%" }} contentContainerStyle={{ gap: 32 }}>
          {isBlocked &&
            posts.length > 0 &&
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
    gap: 4, //8,
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
