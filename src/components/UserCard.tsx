import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type UserCardProps = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
};

export const UserCard = ({name, lastName, email, phone}: UserCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{lastName}</Text>
      <Text style={styles.text}>{email}</Text>
      <Text style={styles.text}>{phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    margin: 16,
    padding: 16,
  },
  text: {
    color: '#fff',
  },
});
