import React, {FC} from 'react'
import { UsersCard } from '../../components/UsersCard';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { ButtonReturn } from '../../components/ButtonReturn';

type NavigationProps = StackNavigationProp<RootStackParamList>

interface HomeScreenProps {
  navigation: NavigationProps
}

export const TeamMembersScreen:FC<HomeScreenProps> = ({navigation}) => {
  return (
    <>
      <ButtonReturn navigation={navigation}/>
      <UsersCard name="Arthur Fleck" email="arthurfleck@email.com" jobPosition='Backend Developer'/>
      <UsersCard name="Bruce Wayne" email="brucewayne@email.com" jobPosition='Scrum Master'/>
      <UsersCard name="Barry Allen" email="barryallen@email.com" jobPosition='Product Manager'/>
    </>
  )
};