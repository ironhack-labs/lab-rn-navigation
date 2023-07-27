import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../theme/GoBackButton.styles';

export const GoBackButton = () => {
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={goBack}>
      <Text>Go Back</Text>
    </TouchableOpacity>
  );
};
