import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setSize, getBrand } from "../store/actions/sneakers";
import { DefaultBoldText } from "../components/CustomText";

const SizeButton = ({ style, value, available }) => {
  const dispatch = useDispatch();

  const setSizeHandler = useCallback(() => {
    dispatch(setSize(value));
  }, [dispatch, value]);

  const selectedSize = useSelector(state => state.sneakers.size);

  return (
    <TouchableOpacity
      disabled={available !== value ? true : false}
      onPress={setSizeHandler}
      style={{
        ...styles.contain,
        ...style,
        ...(selectedSize === value ? styles.buttonSelected : null)
      }}
    >
     
        <DefaultBoldText
          style={selectedSize === value ? styles.txtSelected : null}
        >
          {value}
        </DefaultBoldText>
        {available !== value ? (
          <Image
            source={require("../assets/images/slash.png")}
            style={{
              width: 55,
              height: 55,
              position: "absolute",
              tintColor: "rgba(100,100,100, 0.3)"
            }}
          />
        ) : null}
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
    borderRadius: 10,
    margin: 5,
  },
  buttonSelected: {
    backgroundColor: "black"
  },
  txtSelected: {
    color: "white"
  }
});

export default SizeButton;
