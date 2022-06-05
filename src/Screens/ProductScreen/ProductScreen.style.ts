import { ViewStyle, StyleSheet } from 'react-native';

interface Style {
  container: ViewStyle;
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  ActivityIndicaterContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderContianer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '2.5%',
  },
  HeaderText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    alignSelf: 'center',
  },
});
