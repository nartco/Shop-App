import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import SneakersList from "../components/SneakersList";

const OrderScreen = props => {
  let orders = useSelector(state => state.sneakers.order);
  orders = orders.flat().flat();
  orders = orders.filter(
    x => x && typeof x === "object" && x.constructor === Object
  );

 if (orders.length === 0) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> no purchase order was placed </Text>
        </View>
      );
    }

  orders = orders.map(order => {
    if (order.sizeSelected !== null) {
      order["size"] = order["sizeSelected"];
    }
    order.sizeSelected = null;

    return order;
  });

  //ajouter la date

  return <SneakersList listData={orders} navigation={props.navigation} />;
};

export default OrderScreen;
