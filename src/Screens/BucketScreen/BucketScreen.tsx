//import liraries
import React, { FC, useState, useEffect, useMemo } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';

import { BucketCard } from '../../Components/BucketCard/bucketCard';
import { styles } from './bucketScreen.style';

interface props {
  navigation: any
}
// create a component
export const BucketScreen: FC<props> = ({ navigation }) => {

  const [bucketlist, setbucketlist] = useState<any>([])
  const [totalPrice, setTotalPrice] = useState<number>(0);

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
          <Icon name="arrow-back" type="Ionicons" size={30} color='black' />
        </TouchableOpacity>
        <Text style={styles.PriceText}>Bucket</Text>
      </View>
      <FlatList
        data={bucketlist}
        numColumns={2}
        renderItem={({ item }) => {
          return (<BucketCard item={item} setbucketlist={setbucketlist} />);
        }}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>${totalPrice}</Text>
      </View>
    </View>
  );
};
