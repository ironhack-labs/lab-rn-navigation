import React from 'react';
import Navigation from './navigation/Navigation';
import {SafeAreaView} from 'react-native';
import {appStyles} from './theme/App.styles';

function App(): JSX.Element {
  return (
    <SafeAreaView style={appStyles.container}>
      <Navigation />
    </SafeAreaView>
  );
}
export default App;
