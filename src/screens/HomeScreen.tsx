/* eslint-disable react/react-in-jsx-scope */
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, StyleSheet, Button} from 'react-native';
import {RootStackParamList} from '../navigation/MyStack';

type HomeScreenNavigatorProps = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface HomeScreenProps {
  navigation: HomeScreenNavigatorProps;
}

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  const userProfile = {
    name: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '555-555-5555',
    avatar: 'https://reactnative.dev/img/tiny_logo.png',
  };

  const members = [userProfile, userProfile, userProfile];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Profile</Text>
        <Button
          title="Go"
          onPress={() => navigation.navigate('Profile', {userProfile})}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Team Members </Text>
        <Button
          title="Go"
          onPress={() => navigation.navigate('TeamMembers', {members})}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  title: {
    marginVertical: 5,
    color: 'black',
    fontWeight: 'bold',
  },
});
