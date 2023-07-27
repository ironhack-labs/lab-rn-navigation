import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {userCardStyles} from '../theme/UserCard.styles';

interface Props {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
}

export const UserCard = ({name, lastName, email, phone, avatar}: Props) => {
  return (
    <View style={userCardStyles.container}>
      <View>
        <Image
          source={{
            uri: avatar,
          }}
          style={userCardStyles.image}
        />
      </View>
      <View style={userCardStyles.textContainer}>
        <View>
          <Text style={userCardStyles.name}>
            {name} {lastName}
          </Text>
        </View>
        <View>
          <Text style={userCardStyles.email}>{email}</Text>
          <Text style={userCardStyles.phone}>{phone}</Text>
        </View>
      </View>
    </View>
  );
};
