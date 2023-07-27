import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';
import type {User} from '../models';

// NOTE: use separate file with type to avoid circular dependencies
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
export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
export type ProfileScreenProps = StackScreenProps<
  RootStackParamList,
  'Profile'
>;
export type MembersScreenProps = StackScreenProps<
  RootStackParamList,
  'Members'
>;
