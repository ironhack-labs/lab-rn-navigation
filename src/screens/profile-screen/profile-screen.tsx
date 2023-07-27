import React from 'react';
import {View} from 'react-native';

import {UserCard} from '../../components';
import {ProfileProps} from '../../navigation/main-navigation.types';

export const ProfileScreen = ({route}: ProfileProps) => {
  const {user} = route.params;

  return (
    <View>
      <UserCard {...user} />
    </View>
  );
};
