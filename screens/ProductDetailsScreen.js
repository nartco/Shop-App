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
import { Ionicons } from "@expo/vector-icons";
import Underline from "../components/Underline";
import { useSelector } from "react-redux";
import {
  TitleText,
  DefaultText,
  DefaultBoldText
} from "../components/CustomText";
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

  const images = {
    Nike: require("../assets/images/nike.png"),
    Adidas: require("../assets/images/adidas.png"),
    Jordan: require("../assets/images/jordan.png"),
    Puma: require("../assets/images/puma.png")
  };

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <TitleText style={styles.title}>{sneakersTitle}</TitleText>
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
        {/* <TitleText style={styles.infosText}>{sneakersTitle}</TitleText>
        <Underline style={styles.underline} /> */}
        <Ionicons
          style={styles.infosText}
          name='ios-add-circle-outline'
          size={32}
          color={Colors.primary}
        />
        <Underline style={styles.underline} />
        <DefaultText style={styles.infosText}>
          {selectedSneakers.size}US
        </DefaultText>
        <Underline style={styles.underline} />
        <DefaultText style={styles.infosText}>
          {selectedSneakers.price}$
        </DefaultText>
        <Underline style={styles.underline} />
        
        <View style={styles.brandContainer}>
          <Image
            source={images[selectedBrand.title]}
            style={{
              width: 70,
              height: 70,
              tintColor: Colors.primary
            }}
            resizeMode='contain'
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    overflow: "hidden",
    backgroundColor: "white",
    alignItems: "center"
  },
  brandContainer: {
    padding: 10
  },
  infosContainer: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  title: {
    paddingTop: 20,
    paddingHorizontal: 20,
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
    padding: 20,
    textAlign: "center"
  },
  underline: {
    alignSelf: "stretch",
    borderBottomWidth: 25
  }
});
export default ProductDetailsScreen;
