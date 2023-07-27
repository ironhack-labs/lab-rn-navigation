import type { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import Card from '../../components/card/card';
import { RootStackParamList } from '../../navigation/navigation';

type Props = StackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;

const ProfileScreen = ({navigation}: Props): JSX.Element => {
  return (
    <View style={styles.member}>
      <Button style={styles.button} onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Button>
      <Card
        name="Michelle"
        lastName="Penna"
        email="michelle@gmail.com"
        phone={3175454522}
        avatar="MP"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  member: {
    marginTop: 10,
  },
  button: {
    width: 100,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 1,
    color: '#000000',
    elevation: 0,
    marginLeft: 10,
    marginBottom: 10,
  },
});

export default ProfileScreen;
