import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { OverflowMenuProvider } from "react-navigation-header-buttons";
import ShopNavigation from "./navigation/ShopNavigation";

export default function App() {
  return (
    <OverflowMenuProvider>
      <ShopNavigation />
    </OverflowMenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
