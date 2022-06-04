import {ViewStyle, StyleSheet, TextStyle} from 'react-native';
import {ImageStyle} from 'react-native-fast-image';

interface Style {
  container: ViewStyle;
  ProductImg: ImageStyle;
  ProductImgContainer: ViewStyle;
  productText: TextStyle;
  counterContainer: ViewStyle;
  counterText: TextStyle;
  BottonContainer: ViewStyle;
  ButtonText: ViewStyle;
}

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '45%',
    padding: 5,
    borderWidth: 0.5,
    margin: '2.5%',
  },
  ProductImgContainer: {
    width: '90%',
    height: 200,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  productText: {width: '90%', marginTop: 5},
  PriceText: {fontWeight: 'bold', color: 'black'},
  counterContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
  },
  counterText: {
    width: 30,
    height: 30,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  BottonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'red',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  ButtonText: {fontWeight: 'bold', color: 'white'},
});
