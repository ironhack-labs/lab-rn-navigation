// components/UserCard.js

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {UserInformation} from '../../types';

interface UserCardProps {
  user: UserInformation;
}
const UserCard: React.FC<UserCardProps> = ({user}) => {
  const {name, lastName, email, phone, avatar} = user;
  return (
    <View style={styles.container}>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <Text style={styles.name}>
        {name} {lastName}
      </Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    marginBottom: 5,
  },
  phone: {
    fontSize: 16,
  },
});

export default UserCard;
