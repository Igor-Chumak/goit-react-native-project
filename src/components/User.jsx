import { Image, Pressable, StyleSheet, Text, View } from "react-native";
// import { useNavigation } from "@react-navigation/native";

const AVATAR_DEFAULT = "../images/avatar_default.png";

export const User = ({
  userId,
  userEmail,
  userDisplayName,
  userAvatarUrl,
  setUserSelectedId,
  isSelected = false,
}) => {
  // const navigation = useNavigation();
  const imgSource = userAvatarUrl ? { uri: userAvatarUrl } : require(AVATAR_DEFAULT);

  return (
    <Pressable style={styles.userBox} onPress={() => setUserSelectedId(userId)}>
      <Image
        source={imgSource}
        style={[styles.userPhoto, isSelected ? styles.isSelected : {}]}
      ></Image>
      <View style={styles.userDataBox}>
        <Text style={styles.userName}>{userDisplayName}</Text>
        <Text style={styles.userEmail}>{userEmail}</Text>
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
  isSelected: {
    borderWidth: 2,
    borderColor: "#FF6C00",
  },
});
