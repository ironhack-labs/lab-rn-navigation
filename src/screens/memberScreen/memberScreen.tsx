import type { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import Card from '../../components/card/card';
import { RootStackParamList } from '../../navigation/navigation';

type Props = StackScreenProps<RootStackParamList, 'Members', 'MyStack'>;

const MemberScreen = ({navigation}: Props): JSX.Element => {
  return (
    <View style={styles.member}>
      <Button style={styles.button} onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Button>
      <Card
        name="Maria"
        lastName="Tibaquira"
        email="maria@gmail.com"
        phone={3178585858}
        avatar="MT"
      />
      <Card
        name="Oscar"
        lastName="Solano"
        email="oscar@gmail.com"
        phone={3138989898}
        avatar="OS"
      />
      <Card
        name="Yaneth"
        lastName="Puentes"
        email="yaneth@gmail.com"
        phone={3123434343}
        avatar="YP"
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

export default MemberScreen;
