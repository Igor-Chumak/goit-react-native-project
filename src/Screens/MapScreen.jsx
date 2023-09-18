import React from "react";
import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import { ContentBox } from "../components";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";

const MapScreen = () => {
  const { params } = useRoute();
  console.log("params :>> ", params);
  return (
    <SafeAreaView>
      <ContentBox>
        <View style={styles.contentBox}>
          <View style={styles.contentImageBox}>
            <MapView
              style={styles.mapStyle}
              region={{
                ...params,
                // latitude: 50.5059531,
                // longitude: 30.4912375,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              showsUserLocation={true}
            >
              {params && <Marker title="I am here" coordinate={params} description="Hello" />}
            </MapView>
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
  mapStyle: {
    width: "100%",
    height: 240,
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
  },
});

export default MapScreen;
