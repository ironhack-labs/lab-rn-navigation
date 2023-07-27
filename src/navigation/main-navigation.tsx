import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ProfileScreen, MembersScreen} from '../screens';
import type {RootStackParamList} from './main-navigation.types';

const Stack = createStackNavigator<RootStackParamList>();

export const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Members" component={MembersScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
