import React from "react";
import { Text, Button, View, StyleSheet, ImageBackground } from "react-native";
import { SNEAKERS } from "../data/sneakers-data";

const selectedSneakers = SNEAKERS.find(s => s.id === "s1");

const HomeScreen = props => {
  
  return (
    <View style={styles.screen}>
      <View>
        <ImageBackground source={{ uri: selectedSneakers.imageUrl }} style={styles.bgImage}>
          <Text numberOfLines={1} >
            {selectedSneakers.title}
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bgImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain'
    // justifyContent: 'flex-end'
},
});

export default HomeScreen;
