import React from 'react';
import {Button, View} from 'react-native';
import {Profile} from '../types/user';

const myProfile: Profile = {
  name: 'Geyser',
  lastName: 'Ramírez',
  email: 'geyser@mydomain.com',
  phone: '9991369509',
  avatar: require('../../assets/profile.png'),
};

const team: Profile[] = [
  {
    name: 'Geyser',
    lastName: 'Ramírez',
    email: 'geyser@mydomain.com',
    phone: '9991369509',
    avatar: require('../../assets/profile.png'),
  },
  {
    name: 'Jorge',
    lastName: 'Gómez',
    email: 'jorge@mydomain.com',
    phone: '2938497238',
    avatar: require('../../assets/profile.png'),
  },
  {
    name: 'Margarita',
    lastName: 'Gonzalez',
    email: 'margarita@mydomain.com',
    phone: '9898434938',
    avatar: require('../../assets/profile.png'),
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile', myProfile)}
      />
      <Button
        title="Team members"
        onPress={() => navigation.navigate('Team', team)}
      />
    </View>
  );
};

export default HomeScreen;
