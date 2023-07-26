import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserCard, Button } from '../components';
import { MembersProps } from '../navigation/types';

export default function MembersScreen({ route, navigation }: MembersProps) {
  const { users } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Members Screen</Text>
      <Button secondary text="<- Go Back" onPress={() => navigation.goBack()} />
      {users.map(user => (
        <View key={user.email} style={styles.divider}>
          <UserCard {...user} />
        </View>
      ))}
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
  divider: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#666',
    marginBottom: 20,
  },
});
