import {
  Keyboard,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import {
  ContentBox,
  ContentBlockImage,
  InputSearchBar,
  CommentsBlock,
  ContentScrollBox,
} from "../components";
//
import firebaseApiAsync from "../utility/firebase/firebaseApi";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
// import { KeyboardAvoidingView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CommentsScreen = () => {
  const {
    params: { id, photoUrl },
  } = useRoute();
  // console.log("Comment Screen id :>> ", id);

  const [comments, setComments] = useState([]);
  const [flag, setFlag] = useState(true);
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();

  useEffect(
    (isFocused) => {
      async function fetchData() {
        const data = await firebaseApiAsync.getCommentsByPostId(id);
        setComments(data);
        // console.log(data);
      }
      fetchData();
    },
    [isFocused, flag]
  );

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={insets.top}
        style={styles.AvoidingView}
      >
        <Pressable onPress={Keyboard.dismiss}>
          {/* <View style={styles.container}> */}
          <ContentBox>
            <ContentBlockImage source={photoUrl} />
            <ScrollView style={{ height: "100%" }} contentContainerStyle={styles.contentContainer}>
              <CommentsBlock />
            </ScrollView>
            <InputSearchBar />
            <View style={{ flex: 1 }} />
          </ContentBox>
          {/* </View> */}
        </Pressable>
      </KeyboardAvoidingView>
    </>
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
    flexGrow: 1,
  },
});

export default CommentsScreen;
