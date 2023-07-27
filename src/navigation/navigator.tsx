import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {StackParamList} from '../types/Stack.type';

import {Home, Profile, TeamMembers} from '../screens';

import {HOME, PROFILE, TEAM_MEMBERS} from './../constants/routes';

const Stack = createNativeStackNavigator<StackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME}>
        <Stack.Screen
          name={HOME}
          component={Home}
          options={{
            title: 'Home',
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name={PROFILE}
          component={Profile}
          options={{
            title: 'Profile',
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name={TEAM_MEMBERS}
          component={TeamMembers}
          options={{
            title: 'Team Members',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
