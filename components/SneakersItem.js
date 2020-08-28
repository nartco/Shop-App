import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";
import { useDispatch } from "react-redux";
import { toggleCart } from "../store/actions/sneakers";
import { Entypo } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const SneakersItem = props => {
  const dispatch = useDispatch();

  const removeCart = () => {
    dispatch(toggleCart(props.sneakersId));
  };

  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  // dsisabled true && render delete button product,qty

 
  return (
    <View style={styles.list}>
      {props.cart ? (
        <View style={styles.trashIcon}>
          <TouchableCmp onPress={removeCart}>
            <Entypo name="cross"  size={29} />
          </TouchableCmp>
        </View>
      ) : null}
      <TouchableCmp
        onPress={props.onSelectSneakers}
        disabled={props.quantity ? true : false}
      >
        <View style={styles.card}>
          <View style={styles.imgContainer}>
            <Image
              source={{ uri: props.imageUrl }}
              style={{
                width: availableDeviceWidth / 2.5,
                height: availableDeviceHeight / 5
              }}
              resizeMode='contain'
            />
          </View>
          <View style={styles.cardTitle}>
            <Text style={[styles.infosText, styles.title]}>{props.title}</Text>

            <Text style={styles.infosText}>
              {props.size}us | {props.price}${" "}
              {props.quantity ? `|quantity: ${props.quantity}` : null}
            </Text>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  },
  imgContainer: {
    alignSelf: "center",
    // marginTop: 3,
    marginLeft: 10
  },
  card: {
    marginBottom: 10,
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    // borderWidth: 1,
    // borderColor: 'white',
    borderRadius: 10,
    backgroundColor: "white"
  },
  cardTitle: {
    marginHorizontal: 7,
    paddingLeft: 10,
    justifyContent: "space-between"
  },
  infosText: {
    marginVertical: 6,
    textAlign: "center",
    color: Colors.primaryTransparentText,
    fontFamily: "openSans"
  },
  title: {
    fontFamily: "openSansBold",
    color: Colors.primary
  },
  trashIcon: {
    position: "absolute",
    top: "3%",
    right: "3%",
    zIndex: 1,
    elevation: 4
  }
});

export default SneakersItem;
