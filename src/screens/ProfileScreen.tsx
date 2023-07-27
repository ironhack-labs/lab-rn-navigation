import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { UserCard } from '../components/UserCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStack';


type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const ProfileScreen = ({route, navigation} : Props) => {
  const {userInformation} = route.params

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
      <UserCard userInfo={userInformation}/>
    </SafeAreaView>
  )
}
