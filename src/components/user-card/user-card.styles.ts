import {StyleSheet} from 'react-native';

export const userCardStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    columnGap: 20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  content: {
    rowGap: 10,
  },
  userName: {
    color: '#333',
    fontSize: 18,
    fontWeight: '700',
  },
  userContactInfo: {
    color: '#333',
    fontSize: 14,
    fontWeight: '400',
  },
});
