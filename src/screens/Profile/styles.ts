import {StyleSheet} from 'react-native';

import globalStyles from '../../styles/global.styles';

export default StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  profileContainer: {
    padding: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.4,
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  fullName: {
    fontWeight: 'bold',
  },
  infoContainer: {
    paddingVertical: 20,
  },
  infoItemContainer: {
    marginBottom: 20,
  },
  infoItemLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoItemValue: {
    color: '#666',
  },
});
