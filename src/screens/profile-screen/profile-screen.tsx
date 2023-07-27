import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import type {NavigationProps} from '../../navigation/main-navigation.types';

export const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
      <Button onPress={() => navigation.navigate('Members')} title="Members" />
    </View>
  );
};
