import {Button, StyleSheet, Text, View} from 'react-native';
import {UserCard} from '../components/UserCard';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type Props = NativeStackScreenProps<RootStackParamList>;

export const ProfileScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <UserCard
        name="Johnny"
        lastName="Bravo"
        email="johnnyb@ravo.com"
        phone="4448889999"
        avatar="somestringurl"
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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
