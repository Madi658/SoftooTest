import { ViewStyle, StyleSheet, TextStyle } from 'react-native';

interface Style {
  container: ViewStyle;
  ProductImgContainer: ViewStyle;
  productText: TextStyle;
  counterText: TextStyle;
  BottonContainer: ViewStyle;
  ButtonText: ViewStyle;
  modalText:TextStyle;
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
  modalSpace: { justifyContent: "flex-end", margin: 0, height: 300 },
  modal: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 30,
  },
  options: {
    height: 30,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  line: {
    width: 40,
    height: 3,
    marginBottom: 10,
    opacity: 0.5,
    borderRadius: 5,
    alignSelf: 'center',
  },
  modalText:{
    marginLeft: 10,
    color: 'black',
    fontWeight: 'bold'
  },
  ProductImgContainer: {
    width: '90%',
    height: 200,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  productText: { width: '90%', marginTop: 5 },
  PriceText: { fontWeight: 'bold', color: 'black' },
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
  ButtonText: { fontWeight: 'bold', color: 'white' },
});
