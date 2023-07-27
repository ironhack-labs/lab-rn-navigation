import React from 'react';
import {View} from 'react-native';

import {UserCard} from '../../components';

export const ProfileScreen = () => {
  return (
    <View>
      <UserCard
        name="Ramses"
        lastName="De La Peña"
        email="ramses.delapena@digitalfemsa.com"
        phone="8443813001"
        avatar="https://www.gravatar.com/avatar/219e08dc1094659300ca356a9a960305"
      />
    </View>
  );
};
