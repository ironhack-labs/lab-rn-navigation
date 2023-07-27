import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationButton } from '../components/NavigationButton'
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const usersInfo : UserInformation[] = [
  {
    name: "Carlos",
    lastName: "Pacheco",
    email: "carlos.pacheco@digitalfemsa.com",
    phone: "1234567890",
    avatar: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
  },
  {
    name: "Sergio",
    lastName: "Ramirez",
    email: "sergio@test.com",
    phone: "1234567890",
    avatar: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
  },
  {
    name: "John",
    lastName: "Doe",
    email: "john@test.com",
    phone: "1234567890",
    avatar: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
  }
]

export const HomeScreen = ({route, navigation} : Props) => {
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
      <NavigationButton
        title='Profile'
        onPress={() => navigation.navigate("Profile", {userInformation: usersInfo[0]})}
      />
      <NavigationButton
        title='TeamMembers'
        onPress={() => navigation.navigate("TeamMembers", {usersInformation: usersInfo})}
      />
    </SafeAreaView>
  )
}
