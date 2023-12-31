import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

import RegistrationScreen from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";
// import PostsScreen from "./src/Screens/PostsScreen";
// import CreatePostScreen from "./src/Screens/CreatePostScreen";
import CommentsScreen from "../Screens/CommentsScreen";
// import ProfileScreen from "./src/Screens/ProfileScreen";
import HomeScreen from "../Screens/HomeScreen";
import MapScreen from "../Screens/MapScreen";

// import GoBackIcon from "./src/images/arrow_left.svg";
// import GoBackIcon from "./src/images/log_out.svg";
// import BGImage from "./src/images/photo_BG.png";
import { GoBackIconBox, HeaderTitle, Loader } from "../components";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoR: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoM: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoB: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <NavigationContainer>
          <MainStack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerTitleAlign: "center",
              // headerShown: false,
              headerStyle: {
                height: 88,
                backgroundColor: "white",
                borderBottomWidth: 1,
                borderColor: "rgba(0,0,0,0.3)",
              },
              // headerBackImageSource: () => <GoBackIcon width={24} height={24} />,
            }}
          >
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="Comments"
              component={CommentsScreen}
              options={{
                headerLeft: () => <GoBackIconBox />,
                headerTitle: () => <HeaderTitle title={"Коментарі"} />,
              }}
            />
            <MainStack.Screen
              name="Map"
              component={MapScreen}
              options={{
                headerLeft: () => <GoBackIconBox />,
                headerTitle: () => <HeaderTitle title={"Мапа де робилося фото"} />,
              }}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  );
}

{
  /* <SafeAreaView style={styles.containerSafe}>
  <ImageBackground source={BGImage} resizeMode="cover" style={styles.imagebg}>
  //  
  </ImageBackground>
</SafeAreaView>; */
}

const styles = StyleSheet.create({
  containerSafe: {
    flexGrow: 1,
    // borderWidth: 1,
    // borderColor: "orange",
  },
  imagebg: {
    height: "100%",
    width: "100%",
  },
});

// import { useRoute } from "../route";
// const Main = () => {
//   const { stateChange } = useSelector((state) => state.auth);
//   const routing = useRoute(true);
//   return (
//     <NavigationContainer >{routing}</NavigationContainer>
//   );
// };
