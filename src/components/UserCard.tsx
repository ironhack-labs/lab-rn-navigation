import React from "react";
import { ImageURISource, Text, View, Image } from "react-native";
import { styles } from "../theme/UserCard.style";


export interface UserCardProps {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: ImageURISource;
}

const UserCard: React.FC<UserCardProps> = ({ name, lastName, email, phone, avatar }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={avatar} />
            <View style={styles.userData}>
                <Text style={styles.name}>{name} {lastName}</Text>
                <Text style={styles.email}>{email}</Text>
                <Text style={styles.phone}>{phone}</Text>
            </View>
        </View>)
}

export default UserCard;