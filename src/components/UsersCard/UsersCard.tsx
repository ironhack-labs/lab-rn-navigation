import React, {FC} from 'react'
import { Image, Text, View } from 'react-native';
import { styles } from '../../theme/Users.styles';

interface HomeScreenProps {
  name: string;
  email: string;
  jobPosition: string;
  goBack?: boolean;
}

export const UsersCard:FC<HomeScreenProps> = ({name, jobPosition, email}) => {
  return (
    <View style={styles.componentScreen}>
      <View style={styles.card}>
        <Image style={styles.photoUser} source={require('../../../assets/user.png')}/>
        <View style={styles.details}>
          <Text style={styles.infoPerson}>Nombre: {name}</Text>
          <Text style={styles.infoPerson}>Correo: {email}</Text>
          <Text style={[styles.jobPosition, styles.infoPerson]}>Puesto: {jobPosition}</Text>
        </View>
      </View>
    </View>
  )
};