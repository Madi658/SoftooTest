import "react-native-gesture-handler";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import ProductsScreen from "../../Screens/ProductScreen/ProductScreen";
import { BottomSheetSlideOutSpec } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs";
import BucketScreen from "../../Screens/BucketScreen/BucketScreen";
import ProductDetails from "../../Screens/ProductDetails/ProductDetails";

export const Navigation = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"ProductsScreen"}
        screenOptions={{ headerShown: false, header: () => null }}
      >
        <Stack.Screen name={"ProductsScreen"} component={ProductsScreen} />
        <Stack.Screen name={"BucketScreen"} component={BucketScreen} />

    
      </Stack.Navigator>
    </NavigationContainer>
  );
};
