import { useEffect, useReducer, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Location from "expo-location";

import MapPinIcon from "../images/map-pin.svg";
import { useNavigation } from "@react-navigation/native";

export const CreateContentForm = ({ photoPost, setPhotoPost, resForm, setResForm }) => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [disable, setDisable] = useState(true);
  const [position, setPosition] = useState(null);
  const [state, dispatch] = useReducer(reducer, { title, location, photo: photoPost, position });

  function reducer(state, action) {
    if (action.type === "submitPublication") return { title, location, photo: photoPost, position };
  }

  useEffect(() => {
    setTitle("");
    setLocation("");
    setPhotoPost(null);
    setResForm(false);
    setPosition(null);
    console.log("Publication :", state);
  }, [state, resForm]);

  useEffect(() => {
    if (!title || !location || !photoPost) return setDisable(true);
    setDisable(false);
  }, [title, location, photoPost]);

  const definePosition = async () => {
    console.log("location define");
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
    console.log("location status", status);
    let location = await Location.getCurrentPositionAsync({});
    console.log("location :>> ", location);
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setPosition(coords);
    // test geocode

    let reverseGeocodeAddress = await Location.reverseGeocodeAsync(coords);
    const { city, country, region, street } = reverseGeocodeAddress[0];
    console.log("info :>> ", reverseGeocodeAddress[0]);
    //
    return coords;
  };

  const handleSubmit = async () => {
    if (!title || !location) return;
    const locs = await definePosition();
    console.log("locs :>> ", locs);
    dispatch({ type: "submitPublication" });
    // navigation.navigate("Posts");
    navigation.navigate("Map", { ...locs });
    return;
  };

  return (
    <View style={styles.wrapForm}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Назва..."
          placeholderTextColor="#BDBDBD"
          value={title}
          onChangeText={setTitle}
          editable={true}
        />
        <View style={styles.wrapInputLocation}>
          <TextInput
            style={[styles.textInput, styles.inputLocation]}
            placeholder="Місцевість..."
            placeholderTextColor="#BDBDBD"
            value={location}
            onChangeText={setLocation}
            editable={true}
          />
          <TouchableOpacity
            style={styles.locationIconBox}
            onPress={() => navigation.navigate("Map")}
          >
            <MapPinIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: disable ? "#E8E8E8" : "#FF6C00" }]}
        onPress={handleSubmit}
        disabled={disable}
      >
        <Text style={[styles.btnText, { color: disable ? "#BDBDBD" : "white" }]}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapForm: {
    width: "100%",
    // alignItems: "center",
    gap: 32,
    // borderWidth: 1,
    // borderColor: "red",
  },
  // wrapProvider: {
  // flex: 1,
  // flexGrow: 1,
  // width: "100%",
  // alignItems: "center",
  // },
  inputBox: {
    width: "100%",
    gap: 16,
    // marginBottom: 32,
  },
  //
  textInput: {
    width: "100%",
    height: 50,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    backgroundColor: "#E8E8E8",
  },
  wrapInputLocation: {
    position: "relative",
  },
  inputLocation: {
    paddingLeft: 28,
  },
  locationIconBox: {
    position: "absolute",
    top: 13,
    left: 2,
  },
  button: {
    width: "100%",
    height: 51,
    // paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  btnText: {
    // width: 120,
    fontFamily: "RobotoR",
    fontSize: 16,
    lineHeight: 19,
    color: "white",
  },
});
