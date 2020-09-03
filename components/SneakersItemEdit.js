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

import Colors from "../constants/Colors";

const SneakersItem = props => {
 

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


  return (
    <View style={styles.list}>
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
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={props.onEdit}>
            <Text style={{color: 'rgb(93, 196, 245)'}}>edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={props.onRemove}>
            <Text style={{color: 'rgb(244, 93, 93)'}}>delete</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginBottom: 25,
    textAlign: "center",
    color: Colors.primaryTransparentText,
    fontFamily: "openSans"
  },
  title: {
    fontFamily: "openSansBold",
    color: Colors.primary
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    width: "45%",
    alignItems: 'center',
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  }
});

export default SneakersItem;
