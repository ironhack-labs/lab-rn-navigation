import {View} from 'react-native';
import React from 'react';
import {UserCard} from '../components/UserCard';

export const ProfileScreen = () => {
  return (
    <View>
      <UserCard
        name="Ángel David"
        lastName="Vargas Hernández"
        email="david@example.com"
        phone="31834453"
        avatar="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
      />
    </View>
  );
};
