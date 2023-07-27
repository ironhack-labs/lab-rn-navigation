import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import type {NavigationProps} from '../../navigation/main-navigation.types';
import {MenuButton} from '../../components';

export const MembersScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View>
      <View style={{rowGap: 20}}>
        <MenuButton onPress={() => navigation.navigate('Home')}>
          Home
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate('Profile')}>
          Profile
        </MenuButton>
      </View>
    </View>
  );
};
