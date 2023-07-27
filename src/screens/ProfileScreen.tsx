import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserCard from '../components/UserCard'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
     <UserCard avatar='https://i.pravatar.cc/300' email='random@email.com' name='Mich' phone='8956231245' />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        padding: 16,
    }
})