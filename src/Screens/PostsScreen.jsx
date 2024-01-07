import { ScrollView, StyleSheet, View } from "react-native";
import { ContentBlock, ContentBox, User } from "../components";

import firebaseApiAsync from "../utility/firebase/firebaseApi";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";

const PostsScreen = () => {
  const isFocused = useIsFocused();
  const [posts, setPosts] = useState([]);
  const [flagRerender, setFlagRerender] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await firebaseApiAsync.getAllPosts();
      // console.log("Posts data :>> ", data);
      setPosts(data);
    }
    fetchData();
  }, [isFocused, flagRerender]);

  return (
    <View style={styles.container}>
      <ContentBox>
        <User />
        <ScrollView
          style={{ height: "100%" }}
          contentContainerStyle={{ flexGrow: 1, gap: 32, paddingBottom: 100 }}
        >
          {posts.length > 0 &&
            posts.map((post) => (
              <ContentBlock key={post.id} {...post} setFlagRerender={setFlagRerender} />
            ))}
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
