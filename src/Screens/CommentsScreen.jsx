import { Keyboard, Pressable, StyleSheet, View } from "react-native";
import {
  ContentBox,
  ContentBlockImage,
  InputSearchBar,
  CommentsBlock,
  ContentScrollBox,
} from "../components";
//
import { useFireStore } from "../firebase/firebaseApi";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";

const CommentsScreen = (route) => {
  const { getCommentsByPostId } = useFireStore();
  const [comments, setComments] = useState([]);
  const [flag, setFlag] = useState(true);
  const isFocused = useIsFocused();

  const { id } = route.params;

  useEffect(
    (isFocused) => {
      async function fetchData() {
        const data = await getCommentsByPostId(id);
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
          <ContentBlockImage />
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
    // width: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  wrapProvider: {
    flexGrow: 1,
    width: "100%",
    // alignItems: "center",
  },
});

export default CommentsScreen;
