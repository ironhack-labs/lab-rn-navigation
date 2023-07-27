import type { StackScreenProps } from '@react-navigation/stack';
import { Button, Divider } from 'native-base';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { RootStackParamList } from '../../navigation/navigation';

type Props = StackScreenProps<RootStackParamList, 'Home', 'MyStack'>;

const HomeScreen = ({navigation}: Props): JSX.Element => {
  return (
    <SafeAreaView style={styles.home}>
      <Button
        style={styles.homeButton}
        onPress={() => navigation.navigate('Profile')}>
        <Text>Go to Profile</Text>
      </Button>
      <Divider />
      <Button
        style={styles.homeButton}
        onPress={() => navigation.navigate('Members')}>
        <Text>Go to Members Team</Text>
      </Button>
      <Divider />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home: {
    paddingHorizontal: 10,
  },
  homeButton: {
    backgroundColor: '#ffffff',
    color: '#000000',
    elevation: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default HomeScreen;
