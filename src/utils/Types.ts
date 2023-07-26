import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export interface User {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    avatar?: string;
  }
  
export interface Props {
    user: User;
  }

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Team: undefined;
};

//HomeType
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

//ProfileTypes
export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
export type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

//TeamMembersType
export type TeamScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Team'>;
