import React from 'react';
import {Image, View, Text} from 'react-native';
import {userCardStyles} from '../theme/UserCard.styles';
import {UserProfile} from '../types';

export const UserCard = (props: UserProfile) => {
  const {name, phone, email, avatar, lastName} = props;

  return (
    <View style={userCardStyles.container}>
      <Image source={{uri: avatar}} style={userCardStyles.image} />
      <View style={userCardStyles.infoContainer}>
        <Text style={userCardStyles.nameText}>{`${name} ${lastName}`}</Text>
        <Text style={userCardStyles.emailText}>{email}</Text>
        <Text style={userCardStyles.phoneText}>{phone}</Text>
      </View>
    </View>
  );
};
