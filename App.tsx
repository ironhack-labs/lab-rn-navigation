import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView} from 'react-native';
import {MainNavigation} from './src/navigation';

export default function App() {
  return (
    // NOTE: I need full screen its easier to use style inline, so the next comment remove the eslint warning
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <MainNavigation />
    </SafeAreaView>
  );
}
