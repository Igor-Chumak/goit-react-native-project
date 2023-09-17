import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { ContentBox } from "../components";

const MapScreen = () => {
  return (
    <SafeAreaView>
      <ContentBox>
        <View style={styles.contentBox}>
          <View style={styles.contentImageBox}>
            <GetCamera closeCamera={closeCamera} />
            <Image source={{ uri: photo }} style={styles.contentImage}></Image>
          </View>
        </View>
      </ContentBox>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexGrow: 1,
    // width: "100%",
    // justifyContent: "flex-start",
    // alignItems: "center",
    // backgroundColor: "green",
    // backgroundColor: "white",
    // paddingVertical: 32,
    // paddingTop: 32,
    // paddingBottom: 32,
    // paddingHorizontal: 16,
    // gap: 32,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  wrapProvider: {
    // flexGrow: 1,
    // width: "100%",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  contentBox: {
    // marginBottom: 32,
    width: "100%",
    justifyContent: "flex-start",
    gap: 8,
    alignItems: "center",
    backgroundColor: "white",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  contentImageBox: {
    display: "relative",
    width: "100%",
    height: 240,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  contentImage: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
  },
});

export default MapScreen;
