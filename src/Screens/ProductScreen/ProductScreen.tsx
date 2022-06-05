//import liraries
import React, { FC } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";

import { styles } from './productScreen.style';
import { GetAllProductsAPI } from '../../Services/ApiServices/apiServices';
import { ProductCard } from '../../Components/ProductCard/productCard';
import { SCREENS } from '../../Services/Utils/constants';

interface props {
  navigation: any;
}
// create a component
export const ProductsScreen: FC<props> = ({ navigation }) => {

  const ProductsQuery = useQuery("posts", GetAllProductsAPI);
  //--------------------------------
  const GoToBucket = () => {
    navigation.push(SCREENS.BUCKET_SCREEN);
  }

  return (
    <SafeAreaView style={styles.container}>
      {ProductsQuery?.isLoading ?
        <View style={styles.ActivityIndicaterContainer}>
          <ActivityIndicator />
        </View> :
        <>
          <View style={styles.HeaderContianer}>
            <Text style={styles.HeaderText}>Products</Text>
            <TouchableOpacity onPress={GoToBucket}>
              <Icon name="shopping-cart" type="FontAwesome" size={30} color='black' />
            </TouchableOpacity>
          </View>
          <FlatList
            data={ProductsQuery?.data}
            numColumns={2}
            renderItem={({ item }) => {
              return (<ProductCard item={item} />);
            }}
          />
        </>}
    </SafeAreaView>
  );
};
