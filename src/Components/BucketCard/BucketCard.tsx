//import liraries
import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './bucketCard.style';
import FastImage from "react-native-fast-image";
import Icon from "react-native-dynamic-vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import ActionButton from '../ActionButton/actionButton';
import { Counter } from '../Counter/counter';

interface props {
  item: any;
  setbucketlist: (item: any) => any;
}
// create a component
export const BucketCard: FC<props> = ({ item, setbucketlist }) => {
  const [counter, setCounter] = useState<number>(item.count)
  const [isModal, setisModal] = useState<boolean>(false);
  const [editCheck, setEditCheck] = useState<boolean>();

  const EditQuantity = async () => {
    let tempArray = [];
    let tempObject = { ...item, count: counter };
    await AsyncStorage.getItem('BucketList').then((_item: any) => {
      if (_item) {
        let filteredArray = JSON.parse(_item).filter((element: any) => element.id !== item.id)
        tempArray = [...filteredArray]
      }
    })
    tempArray.push(tempObject);
    AsyncStorage.setItem('BucketList', JSON.stringify(tempArray));
    setbucketlist(tempArray);
    setEditCheck(false);
  }

  const DeleteProduct = async () => {
    let tempArray
    await AsyncStorage.getItem('BucketList').then((_item: any) => {
      let filteredArray = JSON.parse(_item).filter(
        (element: any) => element?.id !== item?.id);
      tempArray = [...filteredArray];
      setbucketlist(tempArray);
    })
    AsyncStorage.setItem('BucketList', JSON.stringify(tempArray));
  }

  const ModalSwitch = () => {
    setisModal(!isModal)
  }

  const EditPress = () => {
    setEditCheck(true);
    setisModal(!isModal)
  }

  return (
    <>
      <Modal
        isVisible={isModal}
        style={styles.modalSpace}
        onBackdropPress={() => setisModal(false)}
        statusBarTranslucent={true}
      >
        <View style={styles.modal}>
          <View style={styles.line}></View>
          <TouchableOpacity onPress={EditPress} style={styles.options}>
            <Icon name="edit" type="FontAwesome" size={25} color='black' />
            <Text style={styles.modalText} >  Edit quantity</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={DeleteProduct} style={styles.options}>
            <Icon name="delete" type="AntDesign" size={25} color='black' />
            <Text style={styles.modalText} >  Delete Product</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.container}>
        <TouchableOpacity onPress={ModalSwitch} style={{ alignSelf: 'flex-end' }}>
          <Icon name="dots-three-horizontal" type="Entypo" color='black' size={20} />
        </TouchableOpacity>
        <FastImage resizeMode='stretch' source={{ uri: item.img }} style={styles.ProductImgContainer} />
        <Text numberOfLines={2} style={styles.productText}>{item.name}</Text>
        <Text onPress={ModalSwitch} style={styles.PriceText}>Price:${item.price}</Text>
        {editCheck ?
          <Counter
            counter={counter}
            actionAdd={() => setCounter(counter + 1)}
            actionSub={() => setCounter(counter - 1)}
          />
          :
          <Text onPress={EditPress} style={styles.PriceText}>Quantity {counter}</Text>
        }
        {editCheck ? <ActionButton text='Save Changes' action={EditQuantity} from='bucket' /> : null}
      </View>
    </>
  );
};

