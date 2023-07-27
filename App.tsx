// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import TeamMembersScreen from './src/screens/TeamMembersScreen';

// Define screen props interfaces
interface RootStackParamList {
  Home: undefined;
  Profile: undefined;
  TeamMembers: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="TeamMembers" component={TeamMembersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
