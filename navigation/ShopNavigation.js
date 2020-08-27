import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomHeaderButtons, Item } from "../components/HeaderButton";
import { Badge } from "react-native-elements";

import Colors from "../constants/Colors";

import HomeScreen from "../screens/HomeScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import OrderScreen from "../screens/OrderScreen";
import CartScreen from "../screens/CartScreen";
import CreateProductScreen from "../screens/CreateProductScreen";
import EditProductScreen from "../screens/EditProductScreen";
import YourProductsScreen from "../screens/YourProductsScreen";
import ValidationCartScreen from "../screens/ValidationCartScreen";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderStyle = {
  headerStyle: {
    backgroundColor: "white"
  },
  headerTintColor: Platform.OS === "android" ? Colors.primary : Colors.accent
};

const CartStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={HeaderStyle}>
      <Stack.Screen name='Cart' component={CartScreen} />
      <Stack.Screen name='Validation' component={ValidationCartScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={HeaderStyle}>
      <Stack.Screen
        options={{
          headerTitleStyle: {
            fontFamily: "qualyBold"
          },
          headerLeft: () => (
            <CustomHeaderButtons>
              <Item
                title='menu'
                iconName='ios-menu'
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </CustomHeaderButtons>
          ),
          headerRight: () => (
            <CustomHeaderButtons>
              <Item
                title='menu'
                iconName='ios-cart'
                onPress={() => {
                  navigation.navigate('Cart');
                }}
              />
            </CustomHeaderButtons>
          )
        }}
        name='SNKX'
        component={HomeScreen}
      />
      <Stack.Screen
        options={({ route }) => ({
          transitionSpec: {
            open: config,
            close: config
          },
          title: route.params.categoryId,
          headerBackTitle: "Home",
          headerRight: () => (
            <CustomHeaderButtons>
              <Item
                title='menu'
                iconName='ios-cart'
                onPress={() => {
                  navigation.navigate('Cart');
                }}
              />
            </CustomHeaderButtons>
          )
        })}
        name='Details'
        component={ProductDetailsScreen}
      />
      <Stack.Screen
        name='Cart'
        options={{ headerBackTitle: "Product" }}
        component={CartStack}
      />
    </Stack.Navigator>
  );
};

const ManageProducts = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={HeaderStyle}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <CustomHeaderButtons>
              <Item
                title='menu'
                iconName='ios-menu'
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </CustomHeaderButtons>
          )
        }}
        name='Manage Products'
        component={YourProductsScreen}
      />
      <Stack.Screen name='Create Product' component={CreateProductScreen} />
      <Stack.Screen name='Edit' component={EditProductScreen} />
    </Stack.Navigator>
  );
};

const Order = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={HeaderStyle}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <CustomHeaderButtons>
              <Item
                title='menu'
                iconName='ios-menu'
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </CustomHeaderButtons>
          )
        }}
        name='Order'
        component={OrderScreen}
      />
    </Stack.Navigator>
  );
};

const ShopNavigation = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        drawerContentOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: "black",
          width: 240
        }}
        drawerStyle={{
          backgroundColor: "white"
        }}
      >
        <Drawer.Screen name='Home' component={HomeStack} />
        <Drawer.Screen name='Order' component={Order} />
        <Drawer.Screen name='Manage products' component={ManageProducts} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
};

const styles = StyleSheet.create({});

export default ShopNavigation;
