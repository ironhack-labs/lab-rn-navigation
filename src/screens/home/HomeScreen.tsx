import { StackNavigationProp } from '@react-navigation/stack';
import React, {FC} from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { styles } from '../../theme/Users.styles';


type NavigationProps = StackNavigationProp<RootStackParamList>

interface HomeScreenProps {
  navigation: NavigationProps
}

export const HomeScreen:FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View>
      <View style={styles.buttonNavigator}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <View style={styles.innerButton}>
            <Text>
              Go to Profile
            </Text>
            <Text>
              &gt;
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonNavigator}>
        <TouchableOpacity onPress={() => navigation.navigate('TeamMembersScreen')}>
          <View style={styles.innerButton}>
            <Text>
              Go to Team Members
            </Text>
            <Text>
              &gt;
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
};