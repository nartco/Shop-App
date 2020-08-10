import React, { useState, useEffect } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import Underline from "../components/Underline";
import { useSelector } from "react-redux";

const ProductDetailsScreen = props => {
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

  const { sneakersId, sneakersTitle } = props.route.params;

  const selectedSneakers = useSelector(state =>
    state.sneakers.sneakers.find(sneakers => sneakers.id === sneakersId)
  );

  return (
    <ScrollView>
      <Image
        source={{ uri: selectedSneakers.imageUrl }}
        style={{
          width: availableDeviceWidth,
          height: availableDeviceHeight / 2.5
        }}
        resizeMode='contain'
      />
      <View style={styles.infosContainer}>
        <Text>{sneakersTitle}</Text>
        <Underline style={styles.underline} />
        <Text>{selectedSneakers.description}</Text>
        <Underline style={styles.underline} />
        <Text>{selectedSneakers.price}$</Text>
        <Underline style={styles.underline} />
        <Text>{selectedSneakers.size}US</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  infosContainer: {
    alignContent: "center",
    alignItems: "center",
    padding: 15,
    justifyContent: "space-between"
  },
  underline: {
    alignSelf: "stretch",
    borderBottomWidth: 20
  }
});
export default ProductDetailsScreen;
