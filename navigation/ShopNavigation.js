import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomHeaderButtons, Item } from "../components/HeaderButton";

import Colors from "../constants/Colors";

import HomeScreen from "../screens/HomeScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import OrderScreen from "../screens/OrderScreen";
import CartScreen from "../screens/CartScreen";
import CreateProductScreen from "../screens/CreateProductScreen";
import EditProductScreen from "../screens/EditProductScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderStyle = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ?  Colors.accent : "white"
  },
  headerTintColor: Platform.OS === "android" ?  Colors.primary : Colors.accent
};

const HomeStack = ({ navigation }) => {
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
        name='Home'
        component={HomeScreen}
      />
      <Stack.Screen name='Details' component={ProductDetailsScreen} />
      <Stack.Screen name='Order' component={OrderScreen} />
      <Stack.Screen name='Cart' component={CartScreen} />
      <Stack.Screen name='Edit' component={EditProductScreen} />
    </Stack.Navigator>
  );
};

const CreateProduct = ({ navigation }) => {
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
        name='Create Product'
        component={CreateProductScreen}
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
          inactiveTintColor: Platform.OS === "android" ? Colors.primary : Colors.accent,
          width: 240
        }}
        drawerStyle={{
          backgroundColor: Platform.OS === "android" ? Colors.accent : 'white'
        }}
      >
        <Drawer.Screen name='Home' component={HomeStack} />
        <Drawer.Screen name='Notifications' component={CreateProduct} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// headerLeft: () => (
//   <HeaderButtons HeaderButtonComponent={HeaderButton}>
//     <Item
//       title='menu'
//       iconName='ios-menu'
//       onPress={() => {
//         navData.navigation.toggleDrawer();
//       }}
//     />
//   </HeaderButtons>

export default ShopNavigation;
