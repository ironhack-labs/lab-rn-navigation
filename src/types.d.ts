export type UserProfile = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
};

export type RootStackParamList = {
  Home: undefined;
  Profile: UserProfile;
  TeamMembers: UserProfile[];
};
