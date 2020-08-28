import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  BackHandler
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  TitleText,
  DefaultText,
  DefaultBoldText
} from "../components/CustomText";
import SizeButton from "../components/SizeButton";

import { clearSize, toggleCart } from "../store/actions/sneakers";
import CustomButton from "../components/CustomButton";
import Colors from "../constants/Colors";

const ProductDetailsScreen = props => {
  const dispatch = useDispatch();

  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const backAction = () => {
      dispatch(clearSize());
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction()
    );
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
      backHandler.remove();
    };
  }, []);

  const { sneakersId, sneakersTitle, categoryId } = props.route.params;

  const confirmHandler = () => {
    dispatch(toggleCart(sneakersId));
  };

  const selectedSneakers = useSelector(state =>
    state.sneakers.sneakers.find(sneakers => sneakers.id === sneakersId)
  );

  const selectedSize = useSelector(state => state.sneakers.size);

  const sizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12];

  const images = {
    Nike: require("../assets/images/nike.png"),
    Adidas: require("../assets/images/adidas.png"),
    Jordan: require("../assets/images/jordan.png"),
    Puma: require("../assets/images/puma.png")
  };

  if (!selectedSneakers) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No sneakers selected</Text>
      </View>
    );
  }

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
            source={images[categoryId]}
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
            <SizeButton
              value={size}
              available={selectedSneakers.size}
              style={
                selectedSneakers.size === size
                  ? styles.sizeContainer
                  : styles.disabledSizeContainer
              }
              key={size}
            />
          ))}
        </ScrollView>
        <CustomButton
          title='add to cart'
          onPress={confirmHandler}
          sneakersId={sneakersId}
          style={selectedSize !== 0 ? styles.addToCartButton : null}
        />
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
    marginVertical: 30
  },
  disabledSizeContainer: {
    marginVertical: 30,
    backgroundColor: "rgba(0,0,0,0.03)"
  },
  addToCartButton: {
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
export default ProductDetailsScreen;
