import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { User as CardProps } from '../types';

export default function UserCard({
  name,
  lastName,
  email,
  phone,
  avatar,
}: CardProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.textPrimary}>{`${name} ${lastName}`}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{email}</Text>
          <Text style={styles.text}>{phone}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
  },
  content: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  textContainer: {},
  textPrimary: {
    color: '#666',
    fontSize: 18,
  },
  text: {
    color: '#666',
    fontSize: 12,
    lineHeight: 20,
  },
});
