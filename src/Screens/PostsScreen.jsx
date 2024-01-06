import { ScrollView, StyleSheet, View } from "react-native";
import { ContentBlock, ContentBox, User } from "../components";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../utility/firebase/config";
// navigate
// import { createStackNavigator } from "@react-navigation/stack";
// import CommentsScreen from "./CommentsScreen";
// import MapScreen from "./MapScreen";
// import { GoBackIconBox, HeaderTitle } from "../components";

// const AdditionalStack = createStackNavigator();
//

import firebaseApiAsync from "../utility/firebase/firebaseApi";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";

const PostsScreen = () => {
  const isFocused = useIsFocused();
  const [posts, setPosts] = useState([]);

  useEffect(
    (isFocused) => {
      async function fetchData() {
        const data = await firebaseApiAsync.getAllPosts();
        console.log("data :>> ", data);
        setPosts(data);
      }
      fetchData();
    },
    [isFocused]
  );

  // mentor
  // const getAllPosts = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "posts"));

  //     setPosts(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // useEffect(() => {
  //   getAllPosts();
  // }, []);
  //

  return (
    <View style={styles.container}>
      <ContentBox>
        <User />
        <ScrollView
          style={styles.scrollView}
          // style={{ height: "100%"}}
          contentContainerStyle={{ flexGrow: 1, gap: 32 }}
        >
          {posts.length && posts.map((post) => <ContentBlock key={post.id} {...post} />)}
          {/* <ContentBlock title={"Ліс"} comments={"8"} location={"Ivano-Frankivsk Region, Ukraine"} /> */}
        </ScrollView>
      </ContentBox>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    // paddingBottom: 51,
    // paddingBottom: 83-32,
    // borderWidth: 2,
    // borderColor: "blue",
  },
  scrollView: { height: "100%", paddingBottom: 88 },
});

export default PostsScreen;
