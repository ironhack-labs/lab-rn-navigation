import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    borderRadius: 10,
    flexDirection: 'row',
  },
  avatarContainer: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoContainer: {
    paddingVertical: 20,
    justifyContent: 'center',
    gap: 15,
  },
  fullName: {
    fontWeight: 'bold',
  },
  email: {
    color: '#666',
    fontSize: 12,
  },
  phone: {
    fontSize: 12,
  },
});
