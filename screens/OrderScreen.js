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
   orders = orders.map(order => {
        order['size'] = order['sizeSelected']
        order.sizeSelected = null
      
        return order
   })
   
 
  console.log(orders);

  return (

      <SneakersList listData={orders} navigation={props.navigation} />
   
  );
};

export default OrderScreen;
 