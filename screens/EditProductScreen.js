import React, { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Keyboard,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  Text,
  ScrollView,
  Picker
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { editSneakers } from "../store/actions/sneakers";
import { Icon } from "react-native-elements";

const EditProductScreen = props => {
  const { sneakersId } = props.route.params;

  const dispatch = useDispatch();
  const [handlePress, setHandlePress] = React.useState(false);

  
  const handleConfirm = () => {
    setHandlePress(true);
    setTimeout(() => setHandlePress(false), 1000)
    dispatch(editSneakers(sneakersId, title, description, price, size));
  };

  const selectedSneakers = useSelector(state =>
    state.sneakers.sneakers.find(sneakers => sneakers.id === sneakersId)
  );

  const [title, setTitle] = React.useState(selectedSneakers.title);

  const [description, setDescription] = React.useState(
    selectedSneakers.description
  );
  const [price, setPrice] = React.useState(selectedSneakers.price);
  const [size, setSize] = React.useState(selectedSneakers.size);

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
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : null}
      style={{ flex: 1 }}
      enabled
      keyboardVerticalOffset={100}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

          <TextInput
            style={styles.input}
            placeholderTextColor='black'
            onChangeText={text => setTitle(text)}
            value={title}
            returnKeyType={"done"}
          />

          <TextInput
            style={[styles.input, styles.description]}
            placeholderTextColor='black'
            onChangeText={text => setDescription(text)}
            value={description}
            multiline={true}
            behavior='padding'
            textAlign={"center"}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor='black'
            onChangeText={text => setPrice(text)}
            value={`${price}`}
            behavior='padding'
            returnKeyType={"done"}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor='black'
            onChangeText={text => setSize(text)}
            value={`${size}`}
            behavior='padding'
            returnKeyType={"done"}
          />

          <TouchableOpacity
            disabled={handlePress}
            onPress={handleConfirm}
            style={styles.appButtonContainer}
          >
            {handlePress === true ? (
              <Icon name='check-bold' type='material-community' />
            ) : (
              <Text style={styles.appButtonText}>confirm</Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  input: {
    height: 60,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 7,
    margin: 20,
    borderRadius: 10,
    padding: 12,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 1,
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    textAlign: "center"
  },
  description: {
    height: 200
  },
  appButtonContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    width: "80%",
    marginTop: 30,
    marginBottom: 30,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  },
  appButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default EditProductScreen;
