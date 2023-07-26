import {StyleSheet} from 'react-native';

import globalStyles from '../../styles/global.styles';

export default StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  item: {
    padding: 20,
    borderBottomWidth: 0.4,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemIcon: {
    fontSize: 20,
  },
});
