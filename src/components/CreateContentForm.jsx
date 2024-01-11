import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { createLocationValue } from "../utility/createLocationValue";
import MapPinIcon from "../images/map-pin.svg";

export const CreateContentForm = ({ state, handleSubmit, localDispatch }) => {
  const navigation = useNavigation();
  const [disable, setDisable] = useState(true);
  const { title, photoUrl, location, coords } = state;
  const locationValue = createLocationValue(location);

  useEffect(() => {
    if (!title || !photoUrl) return setDisable(true);
    setDisable(false);
  }, [title, photoUrl]);

  return (
    <View style={styles.wrapForm}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Назва..."
          placeholderTextColor="#BDBDBD"
          value={title}
          onChangeText={(e) => localDispatch({ type: "update", payload: { title: e } })}
          editable={true}
        />
        <View style={styles.wrapInputLocation}>
          <TextInput
            style={[styles.textInput, styles.inputLocation]}
            placeholder="Місцевість..."
            placeholderTextColor="#BDBDBD"
            value={locationValue}
            editable={false}
          />
          <TouchableOpacity
            style={styles.locationIconBox}
            onPress={() => navigation.navigate("Map", { ...coords })}
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
    paddingLeft: 10,
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
