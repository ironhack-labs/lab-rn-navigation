import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserCard, Button } from '../components';
import { ProfileProps } from '../navigation/types';

export default function ProfileScreen({ route, navigation }: ProfileProps) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Button secondary text="<- Go Back" onPress={() => navigation.goBack()} />
      <UserCard {...user} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: '#666',
    marginBottom: 20,
  },
});
