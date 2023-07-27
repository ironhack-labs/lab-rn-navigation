import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProfileScreen, TeamMembersScreen } from './src/screens';
import { Text, View } from 'react-native';
import styles from './src/theme/HomeScreen.styles';

const RootHeader = () => {
  return (
    <View>
      <Text style={styles.headerTitle}>HomeScreen</Text>
    </View>
  );
};

export type RootStackParamList = {
  Profile: { id: number } | undefined;
  TeamMembers: { id: number } | undefined;
};

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: '',
            headerLeft: () => <RootHeader />,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TeamMembers"
          component={TeamMembersScreen}
          options={{
            headerTitle: '',
            headerLeft: () => <RootHeader />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
