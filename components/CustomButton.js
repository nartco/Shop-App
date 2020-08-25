import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useSelector } from "react-redux";
import { Icon } from "react-native-elements";
import Colors from "../constants/Colors";

const CustomButton = ({ onPress, title, style, sneakersId }) => {
  const inCart = useSelector(state =>
    state.sneakers.cartSneakers.findIndex(
      sneakers => sneakers.id === sneakersId
    )
  );
  const sizeSelected = useSelector(state => state.sneakers.size);
  return (
    <TouchableOpacity
      disabled={inCart < 0 && sizeSelected !== 0 ? false : true}
      onPress={onPress}
      style={{ ...styles.appButtonContainer, ...style }}
    >
      {inCart < 0 ? (
        <Text style={styles.appButtonText}>{title}</Text>
      ) : (
        <Icon name='check-bold' type='material-community' />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    width: "80%",
    marginBottom: 20
  },
  appButtonText: {
    fontSize: 18,
    color: Colors.accent,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default CustomButton;
