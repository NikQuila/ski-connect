import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
// navigation
import NavigationController from "./src/navigation/NavigationController";
// fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
// Redux
import { store } from "./src/store/store";
import { Provider } from "react-redux";

// Ignore log notification by message
LogBox.ignoreLogs([
  "expo-app-loading is deprecated in favor of expo-splash-screen: use SplashScreen.preventAutoHideAsync() and SplashScreen.hideAsync() instead. https://docs.expo.dev/versions/latest/sdk/splash-screen/",
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/poppins/PoppinsRegular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/poppins/Poppins-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationController />
      </ApplicationProvider>
    </Provider>
  );
}
