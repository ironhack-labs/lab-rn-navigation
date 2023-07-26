import React from 'react'
import { Image, Text, View } from 'react-native'
import { User } from '../types/User'
import { UserCardStyles } from '../theme/UserCard.style'

const UserCard = ({ user }: { user: User }) => {
    return (
        <View style={UserCardStyles.container}>
            <Image
                resizeMode='contain'
                style={{ height: 30, width: 30, marginEnd: 15, borderRadius: 100 }}
                source={{ uri: user.avatar }}
            />
            <View style={UserCardStyles.infoContainer}>
                <Text style={{ fontWeight: 'bold' }}>{user.name} {user.lastName}</Text>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text numberOfLines={1} style={{ flex: 1, fontSize: 12 }}>{user.email}</Text>
                    <Text numberOfLines={1} style={{ fontSize: 12 }}>{user.phone}</Text>
                </View>
            </View>
        </View>
    )
}

export default UserCard