import {View} from 'react-native';
import React from 'react';
import GoBackButton from '../components/GoBackButton';
import {ProfileScreenProps} from '../navigation/Navigation';
import {UserCard} from '../components/UserCard';
import {appStyles} from '../theme/App.styles';

const ProfileScreen = ({route}: ProfileScreenProps) => {
  return (
    <View style={appStyles.screenContainer}>
      <GoBackButton />
      <UserCard {...route.params} />
    </View>
  );
};

export default ProfileScreen;
