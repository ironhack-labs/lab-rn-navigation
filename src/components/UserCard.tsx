import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const UserCard = ({userInfo} : {userInfo : UserInformation}) => {
  return (
    <View style={{backgroundColor:"black", flexDirection:"row", alignItems:"center"}}>
      <View>
        <Image
          source={{uri:userInfo.avatar}}
          style={{width:50, height:50}}
        />
      </View>
      <View>
        <Text style={styles.infoText}>{`${userInfo.name} ${userInfo.lastName}`}</Text>
        <Text style={styles.infoText}>{`${userInfo.email}`}</Text>
        <Text style={styles.infoText}>{`${userInfo.phone}`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  infoText : {
    color:"white"
  }
})
