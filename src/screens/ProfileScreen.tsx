import { View } from 'react-native';
import { UserCard } from '../components/UserCard';
import { GoBackButton } from '../components/GoBackButton';
import styles from '../theme/ProfileScreen.styles';

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <GoBackButton />
      <UserCard
        name="Katia"
        lastName="Vega"
        phone={1111111111}
        email="k_xxxxx@gmail.com"
        avatar={require('../../assets/avatar.png')}
      />
    </View>
  );
}
