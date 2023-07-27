import {StyleSheet} from 'react-native';

export const userCardStyles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'black',
    marginHorizontal: 10,
    borderRadius: 10,
    width: '95%',
    marginBottom: 20,
  },

  image: {
    width: 130,
    height: 130,
    borderRadius: 100,
    marginRight: 20,
  },

  textContainer: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
    width: 235,
    maxWidth: 235,
  },

  name: {
    fontSize: 22,
    color: '#fff',
  },

  email: {
    color: '#fff',
    marginTop: 4,
    fontSize: 15,
  },

  phone: {
    color: '#fff',
    marginTop: 10,
    fontSize: 15,
  },
});
