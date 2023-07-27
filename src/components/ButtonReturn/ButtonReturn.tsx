import React, {FC} from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { styles } from '../../theme/Users.styles';

type NavigationProps = StackNavigationProp<RootStackParamList>

interface HomeScreenProps {
  navigation: NavigationProps
}

export const ButtonReturn:FC<HomeScreenProps> = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
      <View style={styles.goBackButton}>
        <Text style={{textAlign: 'center'}}>
          Go Back
        </Text>
      </View>
    </TouchableOpacity>
  )
};