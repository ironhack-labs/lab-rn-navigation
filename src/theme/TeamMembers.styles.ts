import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
  },
  scrollView: {
    gap: 10,
    paddingBottom: 20,
    marginHorizontal: 20,
  },
});

export default styles;
