import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import UserCard from '../components/UserCard';
import {Profile} from '../types/user';
import {useNavigation} from '@react-navigation/native';

const TeamScreen = props => {
  const team = props.route.params;
  const {goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={goBack} />
      <ScrollView style={styles.scrollView}>
        {team.map((data: Profile, index: number) => (
          <UserCard key={index} data={data} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TeamScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  }
});
