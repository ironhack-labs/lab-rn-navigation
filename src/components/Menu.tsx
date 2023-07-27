import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import React from 'react';

type RootStackParamList = {
  Home: {id: number} | undefined;
  Profile: {id: number} | undefined;
  TeamMembers: {id: number} | undefined;
};

const Menu = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Team Members"
        onPress={() => navigation.navigate('TeamMembers')}
      />
    </View>
  );
};

export default Menu;
