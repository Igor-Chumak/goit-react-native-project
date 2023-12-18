import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";

import { Loader } from "./src/components";
import { Main } from "./src/Main";

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
        <Main />
      </PersistGate>
    </ReduxProvider>
  );
}
