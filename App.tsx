import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './src/screens/HomeScreen';
import {ProfileScreen} from './src/screens/ProfileScreen';
import {TeamMembersScreen} from './src/screens/TeamMembersScreen';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="TeamMembers" component={TeamMembersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
