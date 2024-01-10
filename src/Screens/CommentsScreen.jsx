import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import { ContentBox, ContentBlockImage, InputSearchBar, OneComment } from "../components";
//
import firebaseApiAsync from "../utility/firebase/firebaseApi";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CommentsScreen = () => {
  const {
    params: { id: postId, photoUrl, comments },
  } = useRoute();
  // console.log("Comment Screen id :>> ", id);
  console.log("Comment comments:>> ", comments);

  // const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();
  // const [comments, setComments] = useState([]);
  // const [flagRerender, setFlagRerender] = useState(false);

  // useEffect(
  //   (isFocused) => {
  //     async function fetchData() {
  //       const data = await firebaseApiAsync.getCommentsByPostId(postId);
  //       console.log("Comments data :>> ", data);
  //       setComments(data);
  //     }
  //     fetchData();
  //   },
  //   [isFocused, flagRerender]
  // );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={insets.top}
      style={styles.AvoidingView}
    >
      <Pressable onPress={Keyboard.dismiss}>
        {/* <View style={styles.container}> */}
        <ContentBox>
          <ContentBlockImage source={photoUrl} />
          <ScrollView
            style={{ height: "100%" }}
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.contentBox} onStartShouldSetResponder={() => true}>
              {comments.length > 0 &&
                comments.map((comment) => <OneComment key={comment.id} {...comment} />)}
            </View>
          </ScrollView>
          <InputSearchBar />
          <View style={{ flex: 1 }} />
        </ContentBox>
        {/* </View> */}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

//   return (
//     <Pressable onPress={Keyboard.dismiss} style={styles.wrapProvider}>
//       <View style={styles.container}>
//         <ContentBox>
//           <ContentBlockImage source={photoUrl} />
//           <CommentsBlock />
//         </ContentBox>
//         <InputSearchBar />
//       </View>
//     </Pressable>
//   );
// };

const styles = StyleSheet.create({
  wrapProvider: {
    flexGrow: 1,
    //   width: "100%",
    //   // alignItems: "center",
  },
  container: {
    // flex: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
    // position: "relative",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  AvoidingView: {
    // flex: 1,
    // justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  contentContainer: {
    // flexGrow: 1,
    //
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
    // borderWidth: 1,
    // borderColor: "orange",
  },
});

export default CommentsScreen;
