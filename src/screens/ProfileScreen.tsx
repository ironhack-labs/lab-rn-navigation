// ProfileScreen.tsx
import React from 'react';
import { View } from 'react-native';
import UserCard from '../components/UserCard';

const ProfileScreen = () => {
  const user = {
    name: 'John',
    lastName: 'Doe',
    email: '1005alexis@gmail.com',
    phone: '123-456-7890',
  };

  return (
    <View>
      <UserCard user={user} />
    </View>
  );
};

export default ProfileScreen;
