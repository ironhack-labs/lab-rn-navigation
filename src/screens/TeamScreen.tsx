import React from 'react';
import {Button, FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

//Components
import UserCard from '../components/UserCard';
import TeamMember from '../components/TeamMember';
import CustomButton from '../components/CustomBustton';

//Utils
import {TeamScreenNavigationProp} from '../utils/Types';

interface Props {
  navigation: TeamScreenNavigationProp;
}

const TeamScreen = ({navigation}: Props) => {
  const teamMembers = [
    {
      name: 'Leon',
      lastName: 'Collins',
      email: 'leon.doe@example.com',
      phone: '555-1234',
      avatar: 'https://randomuser.me/api/portraits/men/74.jpg',
    },
    {
      name: 'Alyssa',
      lastName: 'Graham',
      email: 'alyssa.graham@example.com',
      phone: '(342) 531-3456',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={teamMembers}
        renderItem={({item}) => <UserCard user={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
      />
      <CustomButton
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContent: {
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default TeamScreen;
