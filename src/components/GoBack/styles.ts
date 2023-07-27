import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    transform: [{rotate: '180deg'}],
    marginRight: 10,
  },
  icon: {
    fontSize: 20,
  },
  text: {
    fontSize: 12,
  },
});
