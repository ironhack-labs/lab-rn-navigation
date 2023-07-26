import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import type {StackParamList} from '../../types/Stack.type';
import type {ProfileType} from '../../types/Profile.type';

import {TEAM_MEMBERS, PROFILE} from '../../constants/routes';

import styles from './styles';

type HomeItemProps = {
  title: string;
  onPress: () => void;
};

const HomeItem = ({title, onPress}: HomeItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <Text>{title}</Text>
        <Text style={styles.itemIcon}>‣</Text>
      </View>
    </TouchableOpacity>
  );
};

const PROFILE_INFO: ProfileType = {
  name: 'Eduardo',
  lastName: 'Viscencio',
  email: 'eduardo@gmail.com',
  phone: '1234567890',
  avatar: 'https://picsum.photos/300/300?random=1',
};

const TEAM: ProfileType[] = [
  PROFILE_INFO,
  {
    name: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    phone: '0987654321',
    avatar: 'https://picsum.photos/300/300?random=2',
  },
  {
    name: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@gmail.com',
    phone: '0987654321',
    avatar: 'https://picsum.photos/300/300?random=3',
  },
];

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <HomeItem
        title="Go to profile"
        onPress={() => navigation.navigate(PROFILE, {userInfo: PROFILE_INFO})}
      />
      <HomeItem
        title="Go to team members"
        onPress={() => navigation.navigate(TEAM_MEMBERS, {team: TEAM})}
      />
    </SafeAreaView>
  );
};

export default Home;
