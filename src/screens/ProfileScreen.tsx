import React from 'react';
import UserCard from '../components/UserCard';

const ProfileScreen = props => {
  const data = props.route.params;
  return <UserCard data={data} />;
};

export default ProfileScreen;
