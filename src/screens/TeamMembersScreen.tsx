import {View} from 'react-native';
import React from 'react';
import GoBackButton from '../components/GoBackButton';
import {TeamMembersScreenProps} from '../navigation/Navigation';
import {UserCard} from '../components/UserCard';
import {appStyles} from '../theme/App.styles';

const TeamMembers = ({route}: TeamMembersScreenProps) => {
  return (
    <View style={appStyles.screenContainer}>
      <GoBackButton />
      {route.params.map((userProfile, i) => (
        <UserCard key={i} {...userProfile} />
      ))}
    </View>
  );
};

export default TeamMembers;
