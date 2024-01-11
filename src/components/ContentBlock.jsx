import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { firebaseApiAsync } from "../utility/firebase/index";
import { userAuth } from "../hooks";
import { createLocationValue } from "../utility/createLocationValue";
import { ContentBlockImage } from "./ContentBlockImage";

import CommentIcon from "../images/comment_stroke.svg";
import ThumbsIcon from "../images/thumbs-up.svg";
import MapPinIcon from "../images/map-pin.svg";

// title - text under the picture
// detailsBox: [boolean] is rendered
// likes: [number] is rendered
// fill ["transparent"] - filling svg icon Comment (given "#FF6C00")
export const ContentBlock = ({
  id,
  setFlagRerender,
  disabledChange = false,
  detailsBox = true,
  fill = "transparent",
  title = "",
  likes = [],
  location = null,
  photoUrl,
  coords,
  comments = [],
  // createdAt,
}) => {
  const navigation = useNavigation();
  const {
    uid,
    // email,
    // displayName,
    // isLoggedIn,
    // avatarUrl,
  } = userAuth();
  const locationValue = createLocationValue(location);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (likes.includes(uid)) return setIsLiked(true);
    setIsLiked(false);
  });

  const handleLikes = async () => {
    const type = isLiked ? "remove" : "add";
    await firebaseApiAsync.changeLike({
      postId: id,
      data: uid,
      type,
    });
    setFlagRerender((prev) => !prev);
    return;
  };

  return (
    <View style={styles.contentBox}>
      <ContentBlockImage source={photoUrl} />
      <View style={styles.contentTitleBox}>
        <Text style={styles.contentTitle}>{title}</Text>
      </View>
      {detailsBox && (
        <View style={styles.contentDetailsBox}>
          <Pressable
            style={styles.icon_text_Box}
            onPress={() => navigation.navigate("Comments", { id, photoUrl })}
          >
            <CommentIcon width={24} height={24} fill={fill} />
            <Text style={styles.contentDetailsText}>{comments.length}</Text>
          </Pressable>
          {likes && (
            <Pressable
              style={[styles.icon_text_Box, styles.likes_Box]}
              onPress={handleLikes}
              disabled={disabledChange}
            >
              <ThumbsIcon width={24} height={24} fill={isLiked ? "red" : "#FF6C00"} />
              <Text style={styles.contentDetailsText}>{likes.length} </Text>
            </Pressable>
          )}
          <Pressable
            style={[styles.icon_text_Box, styles.mapBox]}
            onPress={() => navigation.navigate("Map", { ...coords })}
          >
            <MapPinIcon width={24} height={24} />
            <Text style={[styles.contentDetailsText]}>{locationValue} </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentBox: {
    width: "100%",
    justifyContent: "flex-start",
    gap: 8,
    alignItems: "center",
    backgroundColor: "white",
  },
  contentTitleBox: {
    width: "100%",
  },
  contentTitle: {
    fontFamily: "RobotoM",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  contentDetailsBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon_text_Box: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  contentDetailsText: {
    fontFamily: "RobotoR",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  likes_Box: {
    marginLeft: 12, // 24,
  },
  mapBox: {
    marginLeft: 12, // "auto",
  },
});
