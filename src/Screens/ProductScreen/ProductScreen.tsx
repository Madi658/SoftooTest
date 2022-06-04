//import liraries
import React, { Component, FC, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './ProductScreen.style';
import { useQuery } from "react-query";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetAllProductsAPI } from '../../Services/ApiServices/ApiServices';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Icon from 'react-native-dynamic-vector-icons';
// create a component
interface props {
    navigation: any;
}
const ProductsScreen: FC<props> = ({ navigation }) => {

    const ProductsQuery = useQuery("posts", GetAllProductsAPI, {
        onSuccess: (data) => {
            console.log("Get Producets", data);
        },
    });

    const GoToBucket = () => {
        navigation.push('BucketScreen');
    }

    return (
        <SafeAreaView style={styles.container}>
            {ProductsQuery.isLoading ?
                <View style={styles.ActivityIndicaterContainer}>
                    <ActivityIndicator />
                </View> :
                <>
                    <View style={styles.HeaderContianer}>

                        <Text style={styles.HeaderText}>Products</Text>
                        <TouchableOpacity onPress={GoToBucket}>
                            <Icon
                                name="shopping-cart"
                                type="FontAwesome"
                                size={30}
                                color='black'
                            />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={ProductsQuery.data}
                        numColumns={2}
                        renderItem={({ item, index }) => {
                            return (
                                <ProductCard
                                    item={item}
                                />
                            );
                        }}
                    />
                </>}
        </SafeAreaView>
    );
};

// define your styles

//make this component available to the app
export default ProductsScreen;
