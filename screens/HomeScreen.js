import React, { useEffect, useState } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import { SNEAKERS } from "../data/sneakers-data";
import Colors from "../constants/Colors";

const selectedSneakers = SNEAKERS.find(s => s.id === "s1");

const HomeScreen = props => {
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
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.imgContainer}>
            <Image
              source={{ uri: selectedSneakers.imageUrl }}
              style={{width: availableDeviceHeight / 3.5, height: availableDeviceHeight / 4.5}}
              resizeMode='contain'
            />
          </View>
          <View style={styles.cardTitle}>
            <Text style={styles.infosText}>{selectedSneakers.title}</Text>
            <View style={styles.underline} />
            <Text style={styles.infosText}>{selectedSneakers.size}us</Text>
            <View style={styles.underline} />
            <Text style={styles.infosText}>{selectedSneakers.price}$</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
 },
  imgContainer: {
    marginLeft: 7,
    borderRadius: 10,
    overflow: "hidden"
  },
  card: {
    marginBottom: 10,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderWidth: 1,
    borderColor: Colors.accentTransparent,
    borderRadius: 10,
    backgroundColor: Colors.accentTransparent
  },
  cardTitle: {
    paddingVertical: 5,
    flexGrow: 1,
    flex: 1,
  },
  underline: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1
  },
  infosText: {
    marginVertical: 10,
    textAlign: "center",
    flexShrink: 1,
    color: Colors.primary
  }
});

export default HomeScreen;
