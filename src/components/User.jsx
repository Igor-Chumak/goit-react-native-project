import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { userAuth } from "../hooks";

export const User = () => {
  const { email, displayName, avatarUrl } = userAuth();

  return (
    <Pressable style={styles.userBox}>
      <Image source={`${avatarUrl}`} style={styles.userPhoto}></Image>
      <View style={styles.userDataBox}>
        <Text style={styles.userName}>{displayName}</Text>
        <Text style={styles.userEmail}>{email}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  userBox: {
    width: 171,
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 8,
    alignItems: "center",
    backgroundColor: "white",
  },
  userDataBox: {
    flex: 1,
  },
  userName: {
    fontFamily: "RobotoB",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "RobotoR",
    fontSize: 11,
    lineHeight: 13,
    color: "#212121",
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
});
