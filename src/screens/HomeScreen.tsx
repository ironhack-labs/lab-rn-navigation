import React from 'react';
import {View, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button
        title="Team Members"
        onPress={() => navigation.navigate('TeamMembers')}
      />
    </View>
  );
};

export default HomeScreen;
