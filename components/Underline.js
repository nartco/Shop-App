import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../constants/Colors";


const Underline = props => {
  return <View style={{...styles.underline, ...props.style}} />;
};

const styles = StyleSheet.create({
    underline: {
        borderBottomColor: Colors.primaryTransparent,
        borderBottomWidth: 2
      }
})

export default Underline;
