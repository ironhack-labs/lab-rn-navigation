import React from 'react';
import {View} from 'react-native';

import type {HomeScreenProps} from '../../navigation/main-navigation.types';
import {MenuButton} from '../../components';
import {MEMBERS_DATA, USER_DATA} from '../../__mocks__';

export const HomeScreen = ({navigation}: HomeScreenProps) => (
  <View style={{rowGap: 20}}>
    <MenuButton
      onPress={() => navigation.navigate('Profile', {user: USER_DATA})}>
      Profile
    </MenuButton>
    <MenuButton
      onPress={() => navigation.navigate('Members', {users: MEMBERS_DATA})}>
      Members
    </MenuButton>
  </View>
);
