import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { ProductsScreen } from "../../Screens/ProductScreen/productScreen";
import { BucketScreen } from "../../Screens/BucketScreen/bucketScreen";
import { SCREENS } from "../Utils/constants";

export const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.PRODUCT_SCREEN}
        screenOptions={{ headerShown: false, header: () => null }}
      >
        <Stack.Screen name={SCREENS.PRODUCT_SCREEN} component={ProductsScreen} />
        <Stack.Screen name={SCREENS.BUCKET_SCREEN} component={BucketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
