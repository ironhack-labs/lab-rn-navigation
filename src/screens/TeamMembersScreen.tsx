import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import { RootStackParamList } from '../navigation/RootStack';
import { UserCard } from '../components/UserCard';

type Props = NativeStackScreenProps<RootStackParamList, 'TeamMembers'>;

export const TeamMembersScreen = ({route, navigation} : Props) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
      <FlatList
        data={route.params.usersInformation}
        renderItem={({item}) => <UserCard userInfo={item}/>}
        ItemSeparatorComponent={() => <View style={{height:2}}/>}
      />
    </SafeAreaView>
  )
}
