import React from 'react';
import UserCard from '../components/UserCard';
import {Button, StyleSheet, View} from 'react-native';

const ProfileScreen = props => {
  
  const data = props.route.params;
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={props.navigation.goBack} />
      <UserCard data={data} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
});
