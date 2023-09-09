import { StyleSheet, View } from "react-native";
import { ContentBox, Header, ToolBar, CreateContentBlock, CreateContentForm } from "../components";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Header type={"left"} title={"Створити публікацію"} />
      <ContentBox>
        <CreateContentBlock title={"Завантажте фото"} />
        {/* <CreateContentForm /> */}
        {/* <ContentBlock likes={false} title={"Редагувати фото"} fill={'white'} /> */}
      </ContentBox>
      <ToolBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
});
