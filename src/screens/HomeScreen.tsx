import React from 'react';
import {Button, View} from 'react-native';

type Profile = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: number;
};

const myProfile: Profile = {
  name: 'Geyser',
  lastName: 'Ramírez',
  email: 'geyser@mydomain.com',
  phone: '9991369509',
  avatar: require('../../assets/profile.png'),
};

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile', myProfile)}
      />
      <Button title="Team members" />
    </View>
  );
};

export default HomeScreen;
