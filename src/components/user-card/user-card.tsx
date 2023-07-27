import React from 'react';
import {View, Text, Image} from 'react-native';

import type {User} from '../../models';
import {userCardStyles} from './user-card.styles';

type UserCardProps = User;

export const UserCard = ({
  name,
  lastName,
  email,
  phone,
  avatar,
}: UserCardProps) => (
  <View style={userCardStyles.card}>
    <Image source={{uri: avatar}} style={userCardStyles.avatar} />
    <View style={userCardStyles.content}>
      <Text style={userCardStyles.userName}>
        {name} {lastName}
      </Text>
      <View>
        <Text style={userCardStyles.userContactInfo}>{email}</Text>
        <Text style={userCardStyles.userContactInfo}>{phone}</Text>
      </View>
    </View>
  </View>
);
