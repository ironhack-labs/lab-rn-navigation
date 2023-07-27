// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from './src/screens/ProfileScreen';
import {TeamMembersScreen} from './src/screens/TeamMembersScreen';
import {HomeScreen} from './src/screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Team: undefined;
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Team" component={TeamMembersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
