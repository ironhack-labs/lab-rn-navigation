import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StackNavigator } from '../../App';
import { StackScreenProps } from '@react-navigation/stack';

type HomeProfileProps = StackScreenProps<StackNavigator, 'homeScreen'>

const HomeProfile = ({navigation: {navigate}}: HomeProfileProps) => {
  return (
    <View>
      <Button title='Profile' onPress={() => navigate('profile')} />
      <Button title='Team Members' onPress={() => navigate('teamMembers')} />
    </View>
  )
}

export default HomeProfile

const styles = StyleSheet.create({})