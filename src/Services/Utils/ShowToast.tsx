import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';

const ShowToast = (type, text1, text2, position = 'bottom') => {
    Toast.show({
        type: type,
        text1: text1,
        text2: text2,
        position: position
    })
}

export default ShowToast