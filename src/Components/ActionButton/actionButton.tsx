//import liraries
import React, { FC } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-dynamic-vector-icons';

interface props {
  text: string;
  from: string;
  action: () => void;
}
// create a component
const ActionButton: FC<props> = ({ text, action, from }) => {
  return (
    <TouchableOpacity onPress={action} style={styles.BottonContainer}>
      <Text style={styles.ButtonText}>{text}</Text>
      {from == 'product' ? <Icon name="cart-plus" type="FontAwesome" size={20} color='white' /> : null}
    </TouchableOpacity>
  );
};
// define your styles
const styles = StyleSheet.create({
  BottonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'red',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  ButtonText: { fontWeight: 'bold', color: 'white' },
});
//make this component available to the app
export default ActionButton;
