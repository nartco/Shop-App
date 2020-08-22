import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import {
  TitleText,
  DefaultText,
  DefaultBoldText
} from "../components/CustomText";
import SizeButton from "../components/SizeButton";

import CustomButton from "../components/CustomButton";
import Colors from "../constants/Colors";

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

  const { sneakersId, sneakersTitle, categoryId } = props.route.params;

  const selectedSneakers = useSelector(state =>
    state.sneakers.sneakers.find(sneakers => sneakers.id === sneakersId)
  );

  const selectedBrand = useSelector(state =>
    state.sneakers.brands.find(brandId => brandId.id === categoryId)
  );

  const sizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12];

  const images = {
    Nike: require("../assets/images/nike.png"),
    Adidas: require("../assets/images/adidas.png"),
    Jordan: require("../assets/images/jordan.png"),
    Puma: require("../assets/images/puma.png")
  };

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: selectedSneakers.imageUrl }}
          style={{
            width: availableDeviceWidth / 1.2,
            height: availableDeviceHeight / 3.6
          }}
          resizeMode='contain'
        />
      </View>
      <View style={styles.infosContainer}>
        <View style={styles.brandContainer}>
          <Image
            source={images[selectedBrand.title]}
            style={{
              width: 50,
              height: 50,
              tintColor: Colors.primary
            }}
            resizeMode='contain'
          />
        </View>
        <TitleText style={styles.title}>{sneakersTitle}</TitleText>
        <DefaultText style={styles.infosPrice}>
          $ {selectedSneakers.price}
        </DefaultText>
        <DefaultText style={styles.infosText}>
          {selectedSneakers.description}
        </DefaultText>
        <ScrollView horizontal={true}>
          {sizes.map(size => (
            <SizeButton value={size} style={styles.sizeContainer} key={size} />
          ))}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <CustomButton title='add to cart' onpress={() => caches.log("x")} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    overflow: "hidden",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "white",
    alignItems: "center"
  },
  brandContainer: {
    padding: 10
  },
  buttonContainer: {
    padding: 20
  },
  infosContainer: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  title: {
    padding: 20,
    textAlign: "center",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  infosText: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    textAlign: "center"
  },
  infosPrice: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    textAlign: "center",
    fontSize: 20
  },
  sizeContainer: {
    marginVertical: 20
  }
});
export default ProductDetailsScreen;
