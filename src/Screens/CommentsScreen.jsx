import { useEffect, useState } from "react";
import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useRoute, useIsFocused } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//
import { userAuth } from "../hooks";
import firebaseApiAsync from "../utility/firebase/firebaseApi";
import { ContentBox, ContentBlockImage, InputSearchBar, OneComment } from "../components";

const CommentsScreen = () => {
  const {
    params: { id: postId, photoUrl },
  } = useRoute();
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();

  const {
    uid,
    // email,
    // displayName,
    // isLoggedIn,
    // avatarUrl,
  } = userAuth();
  const [comments, setComments] = useState([]);
  const [flagRerender, setFlagRerender] = useState(false);
  const [newComment, setNewComment] = useState("");

  useEffect(
    (isFocused) => {
      async function fetchData() {
        const data = await firebaseApiAsync.getCommentsByPostId(postId);
        // console.log("Comments data :>> ", data);
        setComments(data);
      }
      fetchData();
    },
    [isFocused, flagRerender]
  );

  const handleSubmit = async () => {
    if (!newComment) return;
    const data = { text: newComment, authorId: uid };
    await firebaseApiAsync.addComment({ postId, data, type: "add" });
    setNewComment("");
    Keyboard.dismiss();
    setFlagRerender((prev) => !prev);
    return;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={insets.top}
      style={styles.AvoidingView}
    >
      <Pressable onPress={Keyboard.dismiss}>
        <ContentBox>
          <ContentBlockImage source={photoUrl} />
          <ScrollView
            style={{ height: "100%" }}
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.contentBox} onStartShouldSetResponder={() => true}>
              {comments.length > 0 &&
                comments.map((comment) => <OneComment key={comment.id} comment={comment} />)}
            </View>
          </ScrollView>
          <InputSearchBar
            handleSubmit={handleSubmit}
            newComment={newComment}
            setNewComment={setNewComment}
          />
          <View style={{ flex: 1 }} />
        </ContentBox>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapProvider: {
    flexGrow: 1,
  },
  contentContainer: {
    // flexGrow: 1,
  },
  contentBox: {
    // flex: 1,
    // flexGrow: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "rgba(0,0,0,0.3)",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
    gap: 24,
  },
});

export default CommentsScreen;
