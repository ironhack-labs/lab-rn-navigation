import React from 'react';
import {View, Text, Image} from 'react-native';

import type {ProfileType} from '../../types/Profile.type';

import styles from './styles';

type UserCardProps = {
  user: ProfileType;
};

const UserCard = ({user}: UserCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{uri: user.avatar}} style={styles.avatar} />
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.fullName}>
            {user.name} {user.lastName}
          </Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
        <Text style={styles.phone}>{user.phone}</Text>
      </View>
    </View>
  );
};

export default UserCard;
