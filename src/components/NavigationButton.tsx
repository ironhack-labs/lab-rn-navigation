import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

interface Props {
  title: string,
  onPress: () => void
}

export const NavigationButton = ({title, onPress} : Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={{
      borderTopWidth:1,
      borderTopColor: "grey",
      borderBottomWidth:1,
      borderBottomColor: "grey",
      padding: 20,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
    }}>
      <Text>{title}</Text>
      <Text style={{fontWeight:"bold", fontSize:25}}>{">"}</Text>
    </TouchableOpacity>
  )
}
