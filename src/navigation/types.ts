import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { User } from '../types';

export type RootStackParamList = {
  Home: undefined;
  Profile: {
    user: User;
  };
  Members: {
    users: User[];
  };
};
export type NavigationProps = StackNavigationProp<RootStackParamList>;

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
export type ProfileProps = StackScreenProps<RootStackParamList, 'Profile'>;
export type MembersProps = StackScreenProps<RootStackParamList, 'Members'>;
