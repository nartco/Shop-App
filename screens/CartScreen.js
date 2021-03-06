import React, { useState, useEffect } from "react";
import SneakersList from "../components/SneakersList";
import { useSelector, useDispatch } from "react-redux";
import { clearSize } from "../store/actions/sneakers";
import { EvilIcons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const CartScreen = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearSize());
  }, []);

  const cart = useSelector(state => state.sneakers.cartSneakers);
  const selectedSneakers = useSelector(state => state.sneakers.cartSneakers);
  let total = cart.reduce((a, sneakers) => a + sneakers.price, 0);

  if(cart.length === 0 || !cart) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <EvilIcons name='cart' type='EvilIcons' reverse size={40}/>
        <Text>Your cart is empty</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <SneakersList listData={selectedSneakers} navigation={props.navigation} />
      <TouchableOpacity
        disabled={cart.length <= 0 ? true : false}
        onPress={() => props.navigation.navigate("Validation")}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>${total} | order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    width: "80%",
    marginBottom: 20,
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

export default CartScreen;
