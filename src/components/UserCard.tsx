import { Image, ImageSourcePropType, View, Text } from 'react-native';
import styles from '../theme/UserCard.styles';

export type UserCardT = {
  name: string;
  phone: number;
  email: string;
  lastName: string;
  avatar: ImageSourcePropType;
};

export const UserCard = (props: UserCardT) => {
  const { name, phone, email, avatar, lastName } = props;

  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.image} />
      <View style={styles.information}>
        <Text style={styles.nameText}>{`${name} ${lastName}`}</Text>
        <Text style={styles.informationText}>{email}</Text>
        <Text style={[styles.informationText, styles.marginTop]}>{phone}</Text>
      </View>
    </View>
  );
};
