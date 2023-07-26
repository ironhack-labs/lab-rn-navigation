import React from 'react';
import {Button, StyleSheet} from 'react-native';
import UserCard from '../components/UserCard';
import {SafeAreaView} from 'react-native-safe-area-context';

//Components
import ScreenTitle from '../components/TitleScreens';
import CustomButton from '../components/CustomBustton';

//Utils
import {ProfileScreenNavigationProp} from '../utils/Types';

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const ProfileScreen = ({navigation}: Props) => {
  const user = {
    name: 'Alyssa',
    lastName: 'Graham',
    email: 'alyssa.graham@example.com',
    phone: '(342) 531-3456',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  };

  return (
    <SafeAreaView style={styles.container}>
      <UserCard user={user} />
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
});

export default ProfileScreen;
