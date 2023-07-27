import React from 'react';
import {Button, StyleSheet} from 'react-native';
import UserCard from '../components/UserCard';
import {SafeAreaView} from 'react-native-safe-area-context';

//Components
import CustomButton from '../components/CustomBustton';

//Utils
import {ProfileScreenNavigationProp, ProfileScreenRouteProp} from '../utils/Types';

interface Props {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
}

const ProfileScreen = ({navigation, route}: Props) => {

  const {userdata} = route.params;
  const user = userdata[0];

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
