import React, { useCallback } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setSize } from '../store/actions/sneakers'
import { DefaultBoldText } from "../components/CustomText";

const SizeButton = ({ style, value }) => {
  const dispatch = useDispatch();

  const setSizeHandler = useCallback(() => {
    console.log('x')
    dispatch(setSize(value));
  }, [dispatch, value]);

  return (
    <TouchableOpacity
      style={{ ...styles.contain, ...style }}
      onPress={setSizeHandler}
    >
      <DefaultBoldText>{value}</DefaultBoldText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 4,
    height: 55,
    width: 55,
    borderRadius: 5,
    margin: 5
  }
});

export default SizeButton;
