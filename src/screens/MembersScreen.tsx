import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types';

type MembersScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'TeamMembers'>;
};

const MembersScreen: React.FC<MembersScreenProps> = ({navigation}) => {
  const Members = [
    {
      name: 'Morris',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
      phone: '987-654-3210',
      avatar: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg',
    },
    {
      name: 'Travis',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
      phone: '987-654-3210',
      avatar: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg',
    },
    {
      name: 'Scott',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
      phone: '987-654-3210',
      avatar: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg',
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
          <Image width={50} height={50} source={{uri: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg'}}/>
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
