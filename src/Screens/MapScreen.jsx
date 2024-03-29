import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, View, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
//
import { setMode } from "../store/storSlice";
import { ContentBox } from "../components";

const REGION_DELTA = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const MapScreen = () => {
  const dispatch = useDispatch();
  const {
    params: { coords, title, location },
  } = useRoute();

  useEffect(() => {
    dispatch(setMode({ isLoading: true }));
  });

  return (
    <ContentBox>
      <View style={styles.contentBox}>
        <View style={styles.contentImageBox}>
          <MapView
            style={styles.mapStyle}
            region={{
              ...coords,
              // latitude: 50.5059531,
              // longitude: 30.4912375,
              ...REGION_DELTA,
            }}
            mapType="standard"
            minZoomLevel={5}
            // showsUserLocation={true}
            onMapReady={() => dispatch(setMode({ isLoading: false }))}
            // onRegionChange={() => console.log("Region change")}
          >
            {coords && <Marker title={title} coordinate={coords} description={location} />}
          </MapView>
        </View>
      </View>
    </ContentBox>
  );
};

const styles = StyleSheet.create({
  contentBox: {
    // marginBottom: 32,
    width: "100%",
    justifyContent: "flex-start",
    gap: 8,
    alignItems: "center",
    backgroundColor: "white",
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
