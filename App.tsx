import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavitagor from './src/navigation/AppNavigator';

// Define the navigation structure
export default function App() {
  return (
    <NavigationContainer>
      <AppNavitagor />
    </NavigationContainer>
  );
};
