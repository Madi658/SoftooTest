//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component, FC, useState, useEffect, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import BucketCard from '../../Components/BucketCard/BucketCard';
import { styles } from './BucketScreen.style';

// create a component
interface props {
    navigation: any
}
const BucketScreen: FC<props> = ({ navigation }) => {

    const [bucketlist, setbucketlist] = useState<any>([])
    const [TotalPrice, setTotalPrice] = useState<number>(0);
    const GoBack = () => {
        navigation.goBack()
    }
    const GetBucketList = async () => {
        await AsyncStorage.getItem('BucketList').then((item: any) => {
            setbucketlist(JSON.parse(item));
        })
    }
    useEffect(() => {
        GetBucketList();
    }, [])

    useMemo(() => {
        let Totaltemp: number = 0;
        bucketlist?.forEach((element: any) => {
            Totaltemp = Totaltemp + element.price * element.count
        });
        setTotalPrice(Totaltemp);
    }, [bucketlist])

    return (
        <View style={styles.container}>

            <View style={styles.ArrowBackContainer}>
                <TouchableOpacity onPress={GoBack}>
                    <Icon
                        name="arrow-back"
                        type="Ionicons"
                        size={30}
                        color='black'
                    />
                </TouchableOpacity>
                <Text style={styles.PriceText}>Bucket</Text>

            </View>
            <View>
                <FlatList
                    data={bucketlist}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <BucketCard
                                item={item}
                                setbucketlist={setbucketlist}
                            />
                        );
                    }}
                />
            </View>
            <View style={{ position: 'absolute', left: 320, top: 550, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', borderRadius: 50, width: 70, height: 70 }}>
                <Text style={{ fontSize: 12, color: 'white' }}>Total</Text>
                <Text style={{ fontSize: 12, color: 'white' }}>${TotalPrice}</Text>
            </View>
        </View>
    );
};

// define your styles

//make this component available to the app
export default BucketScreen;
