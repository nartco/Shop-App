import React, { useEffect, useState } from "react";
import { StackActions } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import validator from "validator";
import {
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { order, clearCart } from "../store/actions/sneakers";

const OrderScreen = props => {
  const [orderDone, setOrderDone] = React.useState(false);

  const dispatch = useDispatch();

  const home = () => {
    props.navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
  }

  const validation = () => {
    dispatch(order(name, address, tel, email));
    dispatch(clearCart())
    setOrderDone(true);
  };

  const [disabled, setDisabled] = React.useState(true);
  const [address, onChangeAddress] = React.useState("");
  const [name, onChangeName] = React.useState("");
  const [tel, onChangeTel] = React.useState("");
  const [email, onChangeEmail] = React.useState("");

  useEffect(() => {
    if (address && name && tel && email) {
      if (validator.isEmail(email)) {
        setDisabled(false);
      }
    } else {
      setDisabled(true);
    }
  }, [address, name, email, tel]);

  if (orderDone === true) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Entypo name='check' type='Entypo' reverse size={40} />
        <Text>SUCCESS !</Text>
        <TouchableOpacity
          onPress={() => home()}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Back To Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TextInput
          style={styles.input}
          placeholder={"Address"}
          placeholderTextColor='black'
          onChangeText={text => onChangeAddress(text)}
          value={address}
        />
        <TextInput
          style={styles.input}
          placeholder={"Name"}
          placeholderTextColor='black'
          onChangeText={text => onChangeName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder={"Email"}
          placeholderTextColor='black'
          onChangeText={text => onChangeEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder={"Tel"}
          placeholderTextColor='black'
          onChangeText={text => onChangeTel(text)}
          value={tel}
          behavior='padding'
          keyboardType='number-pad'
          returnKeyType={"done"}
        />
        <TouchableOpacity
          //   disabled={disabled}
          onPress={validation}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>confirm</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderColor: "white",
    borderWidth: 7,
    margin: 20,
    borderRadius: 10,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  },
  appButtonContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    width: "80%",
    marginTop: 30,
    marginBottom: 10,
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

export default OrderScreen;
