/* eslint-disable react/react-in-jsx-scope */
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, StyleSheet, Button} from 'react-native';
import {RootStackParamList} from '../navigation/MyStack';
import {RouteProp} from '@react-navigation/native';
import {UserCard} from '../components/UserCard';

type ProfileScreenNavigatorProps = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

interface ProfileScreenProps {
  navigation: ProfileScreenNavigatorProps;
  route: ProfileScreenRouteProp;
}

export const ProfileScreen = ({navigation, route}: ProfileScreenProps) => {
  const {userProfile} = route.params;
  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <UserCard userProfile={userProfile} />
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
    marginVertical: 10,
    backgroundColor: 'black',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  cardInfo: {
    flex: 7,
    backgroundColor: '#888',
    margin: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  title: {
    marginVertical: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    marginVertical: 5,
    color: 'white',
  },
});
