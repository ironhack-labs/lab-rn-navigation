import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    gap: 20,
    height: 140,
    borderRadius: 8,
    paddingVertical: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
  image: {
    width: 100,
    height: '100%',
    objectFit: 'fill',
  },
  information: {
    padding: 10,
    width: '60%',
    borderRadius: 8,
    backgroundColor: 'gray',
  },
  nameText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  informationText: {
    color: 'white',
    fontSize: 14,
  },
  marginTop: {
    marginTop: 16,
  },
});

export default styles;
