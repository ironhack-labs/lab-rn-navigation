
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './src/screens/ProfileScreen';
import TeamMembersScreen from './src/screens/TeamMembersScreen';
import Navigation from './src/navigation/Navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Navigation />
  );
}