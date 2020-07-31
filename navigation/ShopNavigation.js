import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import OrderScreen from '../screens/OrderScreen';
import CartScreen from '../screens/CartScreen';
import CreateProductScreen from '../screens/CreateProductScreen';
import EditProductScreen from '../screens/EditProductScreen';

const Stack = createStackNavigator();

const ShopNavigation = () => {
    return (
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={ProductDetailsScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Create Product" component={CreateProductScreen} />
        <Stack.Screen name="Edit" component={EditProductScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default ShopNavigation
