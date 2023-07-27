import React from 'react';
import {View} from 'react-native';

import {UserCard} from '../../components';
import {ProfileScreenProps} from '../../navigation/main-navigation.types';

export const ProfileScreen = ({route}: ProfileScreenProps) => {
  const {user} = route.params;

  return (
    <View>
      <UserCard {...user} />
    </View>
  );
};
