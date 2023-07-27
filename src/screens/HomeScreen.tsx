import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../App';
import styles from '../theme/HomeScreen.styles';

export function HomeScreen() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Profile')}
      >
        <Text>Go to Profile</Text>
        <Text>{'>'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('TeamMembers')}
      >
        <Text>Go to Members Team</Text>
        <Text>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
}
