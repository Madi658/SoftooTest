//import liraries
import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from "react-native-fast-image";

import { styles } from './productCard.style';
import ActionButton from '../ActionButton/actionButton';
import { Counter } from '../Counter/counter';

interface props {
  item: any;
}
// create a component
export const ProductCard: FC<props> = ({ item,testIDincrement,testIDdecrement }) => {
  const [counter, setCounter] = useState<number>(0)

  const AddToBucket = async () => {
    let tempArray = [];
    let tempObject = { ...item, count: counter };
    await AsyncStorage.getItem('BucketList').then((_item: any) => {
      if (_item) {
        let filteredArray = JSON.parse(_item).filter(
          (element: any) => element?.id !== item?.id);
        tempArray = [...filteredArray]
      }
    })
    tempArray.push(tempObject);
    AsyncStorage.setItem('BucketList', JSON.stringify(tempArray));
    setCounter(0);
  }

  return (
    <View style={styles.container}>
      <FastImage resizeMode='stretch' source={{ uri: item.img }} style={styles.ProductImgContainer} />
      <Text numberOfLines={2} style={styles.productText}>{item.name}</Text>
      <Text style={styles.PriceText}>Price:${item.price}</Text>
      <Counter
        counter={counter}
        actionAdd={() => setCounter(counter + 1)}
        actionSub={() => setCounter(counter - 1)}
      />
      {counter > 0 ? <ActionButton text='Save Changes' action={AddToBucket} from='product' /> : null}
    </View>
  );
};

