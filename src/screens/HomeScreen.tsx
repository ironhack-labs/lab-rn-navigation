import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

//Components
import ScreenTitle from '../components/TitleScreens';
import CustomButton from '../components/CustomBustton';

//Utils
import {HomeScreenNavigationProp} from '../utils/Types';

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <ScreenTitle title="Bienvenido a esta nueva App" />
      <CustomButton
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <CustomButton
        title="Go to Team Members"
        onPress={() => navigation.navigate('Team')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
