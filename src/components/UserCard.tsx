// src/components/UserCard.tsx
import React from 'react';
import {View, Text} from 'react-native';

type User = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  // avatar: Add the avatar URL here or use a local image.
};

type Props = {
  user: User;
};

const UserCard: React.FC<Props> = ({user}) => {
  return (
    <View>
      <Text>Name: {user.name}</Text>
      <Text>Last Name: {user.lastName}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
      {/* You can display the avatar here */}
    </View>
  );
};

export default UserCard;
