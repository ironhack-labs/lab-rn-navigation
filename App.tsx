import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeProfile from './src/screens/HomeProfile';
import ProfileScreen from './src/screens/ProfileScreen';
import TeamMembersScreen from './src/screens/TeamMembersScreen';

export type StackNavigator = {
  homeScreen: undefined,
  profile: undefined,
  teamMembers: undefined,
};

const Stack = createStackNavigator<StackNavigator>();

function App(): JSX.Element {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="homeScreen" component={HomeProfile} />
          <Stack.Screen name="profile" component={ProfileScreen} />
          <Stack.Screen name="teamMembers" component={TeamMembersScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
