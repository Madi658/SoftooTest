//import liraries
import React, { Component, FC, useState } from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { styles } from './BucketCard.style';
import FastImage from "react-native-fast-image";
import Icon from "react-native-dynamic-vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
// create a component
interface props {
    item: any;
    setbucketlist: (item: any) => any;
}
const BucketCard: FC<props> = ({ item, setbucketlist }) => {
    const [counter, setcounter] = useState<number>(item.count)
    const [isModal, setisModal] = useState<boolean>(false);
    const [EditCheck, setEditCheck] = useState<boolean>();

    const EditQuantity = async () => {
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
        setbucketlist(temp1);
        setEditCheck(false);
    }
    const DeleteProduct = async () => {
        let temp
        await AsyncStorage.getItem('BucketList').then((Item: any) => {
            let filteredArray = JSON.parse(Item).filter((i: any) => i.id !== item.id)
            temp = [...filteredArray];
            setbucketlist(temp);
        })
        AsyncStorage.setItem('BucketList', JSON.stringify(temp));
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
                style={{ justifyContent: "flex-end", margin: 0, height: 300 }}
                onBackdropPress={() => setisModal(false)}
                statusBarTranslucent={true}
            >
                <View style={styles.modal}>
                    <View style={styles.line}></View>
                    <TouchableOpacity onPress={EditPress} style={styles.options}>
                        <Icon
                            name="edit"
                            type="FontAwesome"
                            size={25}
                            color='black'
                        />
                        <Text
                            style={{
                                marginLeft: 10,
                                color: 'black',
                                fontWeight: 'bold'
                            }}
                        >
                            Edit quantity
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={DeleteProduct} style={styles.options}>
                        <Icon
                            name="delete"
                            type="AntDesign"
                            size={25}
                            color='black'
                        />
                        <Text
                            style={{
                                marginLeft: 10,
                                color: 'black',
                                fontWeight: 'bold'
                            }}
                        >
                            Delete Product
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={styles.container}>
                <TouchableOpacity onPress={ModalSwitch} style={{ alignSelf: 'flex-end' }}>
                    <Icon
                        name="dots-three-horizontal"
                        type="Entypo"
                        color='black'
                        size={20}
                    />
                </TouchableOpacity>
                <FastImage resizeMode='stretch' source={{ uri: item.img }} style={styles.ProductImgContainer} />
                <Text numberOfLines={2} style={styles.productText}>{item.name}</Text>
                <Text onPress={ModalSwitch} style={styles.PriceText}>Price:${item.price}</Text>
                {EditCheck ? <View style={styles.counterContainer}>

                    <TouchableOpacity disabled={counter <= 0 ? true : false} onPress={() => setcounter(counter - 1)} style={styles.counterText}>
                        <Icon
                            name="minus"
                            type="Entypo"
                            color='white'
                            size={30}
                        />
                    </TouchableOpacity >
                    <Text onPress={EditPress} style={styles.PriceText}>{counter}</Text>
                    <TouchableOpacity onPress={() => setcounter(counter + 1)} style={styles.counterText}>
                        <Icon
                            name="plus"
                            type="Entypo"
                            size={30}
                            color='white'
                        />
                    </TouchableOpacity>
                </View> :
                    <Text onPress={EditPress} style={styles.PriceText}>Quantity {counter}</Text>
                }


                {EditCheck ?
                    <TouchableOpacity onPress={EditQuantity} style={styles.BottonContainer}>
                        <Text style={styles.ButtonText}>Save changes</Text>
                    </TouchableOpacity> : null}
            </View>
        </>
    );
};

// define your styles

//make this component available to the app
export default BucketCard;
