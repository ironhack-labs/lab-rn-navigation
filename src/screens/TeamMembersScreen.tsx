// TeamMembersScreen.tsx
import React from 'react';
import {View} from 'react-native';
import UserCard from '../components/UserCard';

const TeamMembersScreen = () => {
  const teamMembers = [
    {
      name: 'Alice',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
      phone: '111-222-3333',
    },
    {
      name: 'Bob',
      lastName: 'Smith',
      email: 'bob.smith@gmail.com',
      phone: '444-555-6666',
    },
  ];

  return (
    <View>
      {teamMembers.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </View>
  );
};

export default TeamMembersScreen;
