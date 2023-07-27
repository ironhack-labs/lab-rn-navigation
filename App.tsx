/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Navigation from './src/navigation/navigation';

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={theme}>
        <SafeAreaView />
        <Navigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

export default App;
