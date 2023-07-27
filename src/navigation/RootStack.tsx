import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { TeamMembersScreen } from '../screens/TeamMembersScreen';

export type RootStackParamList = {
  Home: undefined;
  Profile: {
    userInformation : UserInformation
  };
  TeamMembers: { 
    usersInformation : UserInformation[]
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen}/>
      <Stack.Screen name="TeamMembers" component={TeamMembersScreen}/>
    </Stack.Navigator>
  )
}
