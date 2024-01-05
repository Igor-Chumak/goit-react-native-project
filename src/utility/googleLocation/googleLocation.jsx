import * as Location from "expo-location";

export const definePosition = async () => {
  let latitude = 0;
  let longitude = 0;
  try {
    console.log("location define");
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
    console.log("location status", status);
    let currentGeoPosition = await Location.getCurrentPositionAsync({});
    console.log("currentGeoPosition :>> ", currentGeoPosition);
    latitude = currentGeoPosition.coords.latitude;
    longitude = currentGeoPosition.coords.longitude;
  } catch (err) {
    console.log("Define position ", err.message);
    return {
      latitude: 0,
      longitude: 0,
    };
  }

  const coords = { latitude, longitude };
  console.log("coords :>> ", coords);

  const location = await reverseGeocodeAddress(coords);
  console.log("info location:>> ", location);
  return { coords, location };
};

export const reverseGeocodeAddress = async (coords) => {
  try {
    let reverseGeocodeAddress = await Location.reverseGeocodeAsync(coords);
    const { city, country, region, street } = reverseGeocodeAddress[0];
    // console.log("info location:>> ", reverseGeocodeAddress[0]);
    return { country, region, city };
  } catch (err) {
    console.log("Define address ", err.message);
    return null;
  }
};
