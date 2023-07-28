/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {TeamMembers} from '../screens/TeamMembers';

export type UserProfile = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
};

export type RootStackParamList = {
  Home: undefined;
  Profile: {userProfile: UserProfile};
  TeamMembers: {members: UserProfile[]};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="TeamMembers" component={TeamMembers} />
    </Stack.Navigator>
  );
};
