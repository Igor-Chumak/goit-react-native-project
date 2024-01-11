import { Keyboard, Pressable, StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import { ContentBox, ContentBlockImage, InputSearchBar, CommentsBlock } from "../components";
//
import { firebaseApiAsync } from "../utility/firebase/index";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";

const CommentsScreen = () => {
  const {
    params: { id, photoUrl },
  } = useRoute();
  // console.log("Comment Screen id :>> ", id);

  const [comments, setComments] = useState([]);
  const [flag, setFlag] = useState(true);
  const isFocused = useIsFocused();

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
    <Pressable onPress={Keyboard.dismiss} style={styles.wrapProvider}>
      <View style={styles.container}>
        <ContentBox>
          <ContentBlockImage source={photoUrl} />
          <CommentsBlock />
        </ContentBox>
        <InputSearchBar />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapProvider: {
    flexGrow: 1,
    //   width: "100%",
    //   // alignItems: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "blue",
  },
});

export default CommentsScreen;
