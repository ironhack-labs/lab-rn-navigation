import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';
import type {User} from '../models';

// NOTE: use separate file with type to avoid circular dependencies
export type RootStackParamList = {
  Home: undefined;
  Profile: {
    user: User;
  };
  Members: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
export type ProfileProps = StackScreenProps<RootStackParamList, 'Profile'>;
export type MembersProps = StackScreenProps<RootStackParamList, 'Members'>;
