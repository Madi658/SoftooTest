//import liraries
import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';

interface props {
  counter: number;
  actionAdd: () => void;
  actionSub: () => void;
}
// create a component
export const Counter: FC<props> = ({ counter, actionAdd, actionSub }) => {
  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity disabled={counter <= 0 ? true : false} onPress={actionSub} style={styles.counterText}>
        <Icon name="minus" type="Entypo" color='white' size={30} />
      </TouchableOpacity >
      <Text style={styles.PriceText}>{counter}</Text>
      <TouchableOpacity onPress={actionAdd} style={styles.counterText}>
        <Icon name="plus" type="Entypo" size={30} color='white' />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  counterContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
  },
  PriceText: { fontWeight: 'bold', color: 'black' },
  counterText: {
    width: 30,
    height: 30,
    backgroundColor: 'black',
    borderRadius: 5,
  },
});

