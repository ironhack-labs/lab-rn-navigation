import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../navigation/types';
import { Button } from '../components';
import { user, users } from '../mock-data';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Profile', { user })}
        text="Go to Profile"
      />
      <Button
        onPress={() => navigation.navigate('Members', { users })}
        text="Go to Members Team"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: '#666',
    marginBottom: 20,
  },
});
