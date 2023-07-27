import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../App';
import {UserCard, UserCardProps} from '../components/UserCard';

type TeamMembersScreen = NativeStackScreenProps<RootStackParamList>;

const demoUsers: UserCardProps[] = [
  {
    name: '01',
    lastName: 'AI',
    email: '',
    phone: '',
    avatar: '',
  },
  {
    name: '02',
    lastName: 'AI',
    email: '',
    phone: '',
    avatar: '',
  },
  {
    name: '03',
    lastName: 'AI',
    email: '',
    phone: '',
    avatar: '',
  },
];

export function TeamMembersScreen({navigation}: TeamMembersScreen) {
  return (
    <View style={styles.container}>
      <Text>Team Members Screen</Text>
      <ScrollView>
        {demoUsers.map(item => (
          <UserCard key={item.name} {...item} />
        ))}
      </ScrollView>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
