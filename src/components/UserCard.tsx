import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const UserCard = (props) => {
    
  return (
    <View style={styles.container}>
      <Image source={props.data.avatar} style={styles.avatar} />
      <View style={styles.containerInfo}>
        <Text style={styles.text}>Name: {props.data.name}</Text>
        <Text style={styles.text}>Last Name: {props.data.lastName}</Text>
        <Text style={styles.text}>Email: {props.data.email}</Text>
        <Text style={styles.text}>Phone: {props.data.phone}</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  containerInfo: {
    marginLeft: 15,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  avatar: {width: 100, height: 100},
  text: {
    color: 'white',
  },
});
