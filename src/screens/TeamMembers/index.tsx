import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import type {StackParamList} from '../../types/Stack.type';
import type {ProfileType} from '../../types/Profile.type';

import {TEAM_MEMBERS} from '../../constants/routes';

import {GoBack, UserCard} from '../../components';

import styles from './styles';

const TeamMembers = () => {
  const {params} = useRoute<RouteProp<StackParamList, typeof TEAM_MEMBERS>>();

  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
      <View style={styles.teamMemberContainer}>
        {params?.team.map((user: ProfileType, index: number) => (
          <UserCard key={`${user.name.toLowerCase()}${index}`} user={user} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default TeamMembers;
