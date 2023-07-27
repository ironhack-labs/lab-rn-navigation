import {StyleSheet} from 'react-native';

export const userCardStyles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 25,
    height: 150,
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 20,
  },
  image: {
    width: 100,
    borderRadius: 100,
    objectFit: 'fill',
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'gray',
    marginLeft: 10,
  },
  nameText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  emailText: {
    color: 'white',
    marginBottom: 15,
  },
  phoneText: {
    color: 'white',
  },
});
