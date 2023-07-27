import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types';

type MembersScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'TeamMembers'>;
};

const MembersScreen: React.FC<MembersScreenProps> = ({navigation}) => {
  const Members = [
    {
      name: 'Alice',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
      phone: '987-654-3210',
      avatar: 'https://example.com/alice_avatar.jpg',
    },
    {
      name: 'Alice',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
      phone: '987-654-3210',
      avatar: 'https://example.com/alice_avatar.jpg',
    },
    {
      name: 'Alice',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
      phone: '987-654-3210',
      avatar: 'https://example.com/alice_avatar.jpg',
    },
  ];

  return (
    <View>
      {Members.map((member, index) => (
        <View key={index}>
          <Text>Name: {member.name}</Text>
          <Text>Last Name: {member.lastName}</Text>
          <Text>Email: {member.email}</Text>
          <Text>Phone: {member.phone}</Text>
        </View>
      ))}

      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default MembersScreen;
