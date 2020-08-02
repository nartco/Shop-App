import React from "react";
import { Platform } from "react-native";
import { HeaderButton, HeaderButtons } from "react-navigation-header-buttons";

import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const CustomHeaderButton = props => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === "android" ?  Colors.primary : Colors.accent}
    {...props}
  />
);

export const CustomHeaderButtons = props => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton} {...props} />
  );
};

export { Item } from "react-navigation-header-buttons";
