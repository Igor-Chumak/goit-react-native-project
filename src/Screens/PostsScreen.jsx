import { ScrollView, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContentBlock, ContentBox, TabBar, User } from "../components";

import image1 from "../Img/blank/photo_test_1.jpg";
import image2 from "../Img/blank/photo_test_2.jpg";
import image3 from "../Img/blank/photo_test_3.jpg";

const Tabs = createBottomTabNavigator();

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <ContentBox>
        <User />
        <ScrollView style={{ height: "100%" }} contentContainerStyle={{ flexGrow: 1, gap: 32 }}>
          <ContentBlock
            source={image1}
            title={"Ліс"}
            comments={"8"}
            location={"Ivano-Frankivsk Region, Ukraine"}
          />
          <ContentBlock
            source={image2}
            title={"Захід на Чорному морі"}
            comments={"3"}
            location={"Odessa, Ukraine"}
          />
          <ContentBlock
            source={image3}
            title={"Старий будиночок у Венеції"}
            comments={"50"}
            location={"Venezia, Italy"}
          />
        </ScrollView>
      </ContentBox>
      <TabBar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingBottom: 51,
    // paddingBottom: 83-32,
    // borderWidth: 2,
    // borderColor: "blue",
  },
});

export default PostsScreen;
