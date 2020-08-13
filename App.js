import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { OverflowMenuProvider } from "react-navigation-header-buttons";
import ShopNavigation from "./navigation/ShopNavigation";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import sneakersReducer from "./store/reducers/sneakers";
import { composeWithDevTools } from "redux-devtools-extension";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";

const rootReducer = combineReducers({
  sneakers: sneakersReducer
});
const store = createStore(rootReducer, composeWithDevTools());

export default function App() {

  let [fontsLoaded] = useFonts({
    qualyBold: require("./assets/fonts/Qualy-Bold.ttf"),
    openSans: require("./assets/fonts/OpenSans-SemiBold.ttf"),
    openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    chubGothic: require("./assets/fonts/chubgothic.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <OverflowMenuProvider>
          <ShopNavigation />
        </OverflowMenuProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
