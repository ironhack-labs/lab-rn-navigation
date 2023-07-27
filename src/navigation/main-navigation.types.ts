import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';

// NOTE: use separate file with type to avoid circular dependencies
export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Members: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
export type ProfileProps = StackScreenProps<RootStackParamList, 'Profile'>;
export type MembersProps = StackScreenProps<RootStackParamList, 'Members'>;
