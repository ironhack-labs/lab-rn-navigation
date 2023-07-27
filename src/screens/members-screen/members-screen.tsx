import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import type {NavigationProps} from '../../navigation/main-navigation.types';

export const MembersScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View>
      <Text>Members Screen</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
      <Button onPress={() => navigation.navigate('Profile')} title="Profile" />
    </View>
  );
};
