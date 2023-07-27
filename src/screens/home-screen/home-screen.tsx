import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import type {NavigationProps} from '../../navigation/main-navigation.types';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Profile')} title="Profile" />
      <Button onPress={() => navigation.navigate('Members')} title="Members" />
    </View>
  );
};
