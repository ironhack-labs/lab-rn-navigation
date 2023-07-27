import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import MenuButton from '../components/MenuButton';
import React from 'react';
import {homeScreenStyles} from '../theme/HomeScreen.styles';
import {RootStackParamList} from '../types';
import {appStyles} from '../theme/App.styles';

const HomeScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToProfile = () => {
    navigate('Profile', {
      email: 'pablo@gmail.com',
      name: 'Pablo',
      lastName: 'Gastelum',
      avatar:
        'https://lh3.googleusercontent.com/a/AAcHTtcEVMzQJ9y5cHO2VsG9I9ls5i7UNFZP6szrnSEJ9rhGMSc=s96-c',
      phone: '+52 6444 09 12 33',
    });
  };

  const navigateToTeamMembers = () => {
    navigate('TeamMembers', [
      {
        email: 'pablo@gmail.com',
        name: 'Pablo',
        lastName: 'Gastelum',
        avatar:
          'https://lh3.googleusercontent.com/a/AAcHTtcEVMzQJ9y5cHO2VsG9I9ls5i7UNFZP6szrnSEJ9rhGMSc=s96-c',
        phone: '+52 6444 09 12 33',
      },
      {
        email: 'pablo@gmail.com',
        name: 'Pablo',
        lastName: 'Gastelum',
        avatar:
          'https://lh3.googleusercontent.com/a/AAcHTtcEVMzQJ9y5cHO2VsG9I9ls5i7UNFZP6szrnSEJ9rhGMSc=s96-c',
        phone: '+52 6444 09 12 33',
      },
      {
        email: 'pablo@gmail.com',
        name: 'Pablo',
        lastName: 'Gastelum',
        avatar:
          'https://lh3.googleusercontent.com/a/AAcHTtcEVMzQJ9y5cHO2VsG9I9ls5i7UNFZP6szrnSEJ9rhGMSc=s96-c',
        phone: '+52 6444 09 12 33',
      },
    ]);
  };

  return (
    <View style={appStyles.screenContainer}>
      <View>
        <Text style={homeScreenStyles.title}>HomeScreen</Text>
      </View>
      <MenuButton text="Go to profile" onPress={navigateToProfile} />
      <MenuButton text="Go to Team members" onPress={navigateToTeamMembers} />
    </View>
  );
};

export default HomeScreen;
