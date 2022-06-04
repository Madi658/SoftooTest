import {ViewStyle, StyleSheet, TextStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  ArrowBackContainer: ViewStyle;
  PriceText: TextStyle;
  TotalPriceContainer: ViewStyle;
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  ArrowBackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2.5%',
  },
  PriceText: {fontWeight: 'bold', color: 'black'},
  bukectText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginLeft: 120,
  },
  TotalPriceContainer: {
    position: 'absolute',
    left: 320,
    top: 550,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 50,
    width: 70,
    height: 70,
  },
});
