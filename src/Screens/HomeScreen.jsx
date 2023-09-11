import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ContentBlock, ContentBox, Header, TabBar, User } from "../components";

import image1 from "../Img/blank/photo_test_1.jpg";
import image2 from "../Img/blank/photo_test_2.jpg";
import image3 from "../Img/blank/photo_test_3.jpg";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header type={"exit"} title={"Публікації"} />
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
    // borderWidth: 2,
    // borderColor: "blue",
  },
  wrapProfile: {
    position: "relative",
    marginTop: 170,
    // marginTop: 120,
    width: "100%",
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 83,
    // paddingBottom: 43,
    alignItems: "center",
    gap: 32,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    //
    // borderWidth: 1,
    // borderColor: "red",
  },
  wrapPhoto: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    //
    // borderWidth: 1,
    // borderColor: "red",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  btnChangeBox: {
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
  },
  logOutBox: {
    position: "absolute",
    right: 16,
    top: 22,
    width: 24,
    height: 24,
  },
  titleBox: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontFamily: "RobotoM",
    fontSize: 30,
    letterSpacing: 0.3,
    color: "#212121",
  },
});
