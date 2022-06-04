//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component, FC, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { styles } from './ProductCard.style';
import FastImage from "react-native-fast-image";
import { BucketIcon, StaticImage } from '../../Assets';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-dynamic-vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
// create a component
interface props {
    item: any;
}
const ProductCard: FC<props> = ({ item }) => {
    const [counter, setcounter] = useState<number>(0)


    const AddToBucket = async () => {
        let temp1 = [];
        let temp2 = { ...item, count: counter };
        await AsyncStorage.getItem('BucketList').then((Item: any) => {
            if (Item) {
                let filteredArray = JSON.parse(Item).filter((i: any) => i.id !== item.id)
                temp1 = [...filteredArray]
            }
        })
        temp1.push(temp2);
        AsyncStorage.setItem('BucketList', JSON.stringify(temp1));
        setcounter(0);
    }
    return (
        <View style={styles.container}>
            <FastImage resizeMode='stretch' source={{ uri: item.img }} style={styles.ProductImgContainer} />
            <Text numberOfLines={2} style={styles.productText}>{item.name}</Text>
            <Text style={styles.PriceText}>Price:${item.price}</Text>
            <View style={styles.counterContainer}>
                <TouchableOpacity disabled={counter <= 0 ? true : false} onPress={() => setcounter(counter - 1)} style={styles.counterText}>
                    <Icon
                        name="minus"
                        type="Entypo"
                        color='white'
                        size={30}
                    />
                </TouchableOpacity >
                <Text style={styles.PriceText}>{counter}</Text>
                <TouchableOpacity onPress={() => setcounter(counter + 1)} style={styles.counterText}>
                    <Icon
                        name="plus"
                        type="Entypo"
                        size={30}
                        color='white'
                    />
                </TouchableOpacity>
            </View>
            {counter > 0 ?
                <TouchableOpacity onPress={AddToBucket} style={styles.BottonContainer}>
                    <Text style={styles.ButtonText}>Add to bucket  </Text>
                    <Icon
                        name="cart-plus"
                        type="FontAwesome"
                        size={20}
                        color='white'
                    />
                </TouchableOpacity> : null}
        </View>
    );
};

// define your styles

//make this component available to the app
export default ProductCard;
