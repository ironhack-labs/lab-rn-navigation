import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProfileScreen, TeamMembersScreen } from '../screens';

export type RootStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  TeamMembersScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{title: 'Home'}} name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen options={{title: 'Profile'}} name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen options={{title: 'Teams Members'}} name="TeamMembersScreen" component={TeamMembersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};