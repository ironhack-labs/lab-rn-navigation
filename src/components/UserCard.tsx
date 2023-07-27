import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type UserCardProps = {
  name: string;
  email: string;
  phone: string;
  avatar: string;
};

const UserCard = ({avatar, email, name, phone}: UserCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: avatar}} width={80} height={80} style={styles.image}/>
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.text}>{phone}</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 8,
        borderColor: 'grey',
        overflow: 'hidden',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        borderRadius: 25,
        marginRight: 16
    },
    text: {
        lineHeight: 24,
        fontWeight: '500'
    }
});
