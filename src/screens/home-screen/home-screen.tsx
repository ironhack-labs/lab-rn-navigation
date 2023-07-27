import React from 'react';
import {View} from 'react-native';

import type {HomeProps} from '../../navigation/main-navigation.types';
import {MenuButton} from '../../components';
import {USER_DATA} from '../../__mocks__';

export const HomeScreen = ({navigation}: HomeProps) => {
  return (
    <View>
      <View style={{rowGap: 20}}>
        <MenuButton
          onPress={() => navigation.navigate('Profile', {user: USER_DATA})}>
          Profile
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate('Members')}>
          Members
        </MenuButton>
      </View>
    </View>
  );
};
