import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

//Componets
import ScreenTitle from './TitleScreens';

interface User {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  avatar?: string;
}

interface Props {
  user: User;
}

const UserCard = ({user}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: user.avatar}} style={styles.avatar} />
      <ScreenTitle title={`${user.name} ${user.lastName}`} />
      <Text style={styles.info}>Email: {user.email}</Text>
      <Text style={styles.info}>Phone: {user.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 0,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 250,
    marginBottom: 8,
    borderColor: '#C0D7BB',
    borderWidth: 8,
  },
  info: {
    fontSize: 14,
    color: '#00000085',
    fontWeight: '500',
  },
});

export default UserCard;
