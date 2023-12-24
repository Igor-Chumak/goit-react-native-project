import { ScrollView, StyleSheet, View } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContentBlock, ContentBox, User } from "../components";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

import image1 from "../images/blank/photo_test_1.jpg";
import image2 from "../images/blank/photo_test_2.jpg";
import image3 from "../images/blank/photo_test_3.jpg";

//
import { useFireStore } from "../firebase/firestoreApi";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";

// const Tabs = createBottomTabNavigator();

const PostsScreen = () => {
  const isFocused = useIsFocused();
  const { getAllPosts } = useFireStore();
  const [posts, setPosts] = useState([]);

  // useEffect(
  //   (isFocused) => {
  //     async function fetchData() {
  //       const data = await getAllPosts();
  //       setPosts(data);
  //     }
  //     fetchData();
  //   },
  //   [isFocused]
  // );

  // mentor
  const getAllPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));

      setPosts(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);
  //

  return (
    <View style={styles.container}>
      <ContentBox>
        <User />
        <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1, gap: 32 }}>
          {posts.map((post) => (
            <ContentBlock key={post.id} {...post} />
          ))}
          <ContentBlock
            source={image1}
            title={"Ліс"}
            comments={"8"}
            location={"Ivano-Frankivsk Region, Ukraine"}
          />
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
});

export default PostsScreen;
