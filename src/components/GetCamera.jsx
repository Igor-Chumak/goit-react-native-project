import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera, requestCameraPermissionsAsync } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export const GetCamera = ({ closeCamera }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    // <View style={styles.container}>
    <Camera style={styles.camera} type={type} ref={setCameraRef}>
      <View style={styles.photoView}>
        <TouchableOpacity
          style={styles.flipContainer}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}> Flip </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            if (cameraRef) {
              const { uri } = await cameraRef.takePictureAsync();
              await MediaLibrary.createAssetAsync(uri);
              closeCamera(uri);
            }
          }}
        >
          <View style={styles.takePhotoOut}>
            <View style={styles.takePhotoInner}></View>
          </View>
        </TouchableOpacity>
      </View>
    </Camera>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: "100%",
    // height: "100%",
    // borderWidth: 1,
    // borderColor: "red",
  },
  camera: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },
  button: { alignSelf: "center" },
  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
});
