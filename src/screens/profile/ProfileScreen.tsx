import React, {FC} from 'react'
import { UsersCard } from '../../components/UsersCard';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { ButtonReturn } from '../../components/ButtonReturn';

type NavigationProps = StackNavigationProp<RootStackParamList>

interface HomeScreenProps {
  navigation: NavigationProps
}

export const ProfileScreen:FC<HomeScreenProps> = ({navigation}) => {
  return (
    <>
      <ButtonReturn navigation={navigation}/>
      <UsersCard name='John Doe' email='johndoe@email.com' jobPosition='Frontend Developer'/>
    </>
  )
};