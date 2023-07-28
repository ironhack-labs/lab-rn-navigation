/* eslint-disable react/react-in-jsx-scope */
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, StyleSheet, Button} from 'react-native';
import {RootStackParamList} from '../navigation/MyStack';
import {RouteProp} from '@react-navigation/native';
import {UserCard} from '../components/UserCard';

type TeamMembersScreenNavigatorProps = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;
type TeamMembersScreenRouteProp = RouteProp<RootStackParamList, 'TeamMembers'>;

interface teamMembersScreenProps {
  navigation: TeamMembersScreenNavigatorProps;
  route: TeamMembersScreenRouteProp;
}

export const TeamMembers = ({navigation, route}: teamMembersScreenProps) => {
  const {members} = route.params;

  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      {members.map((member, index) => (
        <UserCard key={index} userProfile={member} />
      ))}
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
