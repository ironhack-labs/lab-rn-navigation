import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import type {NavigationProps} from '../../navigation/main-navigation.types';
import {MenuButton, SectionTitle} from '../../components';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View>
      <SectionTitle>Home Screen</SectionTitle>
      <View style={{rowGap: 20}}>
        <MenuButton onPress={() => navigation.navigate('Profile')}>
          Profile
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate('Members')}>
          Members
        </MenuButton>
      </View>
    </View>
  );
};
