import React from "react"
import { View } from "react-native";
import UserCard, { UserCardProps } from "../components/UserCard";


const TeamMembersScreen = () => {

    const teamMembers: Array<UserCardProps> = [{ name: 'Bere', lastName: 'Hernandez', email: 'Bere@mail.com', phone: '12213213', avatar: require('../../images/chems.jpeg') },
    { name: 'Lalo', lastName: 'Garcia', email: 'lalo@mail.com', phone: '12213213', avatar: require('../../images/chems.jpeg') },
    { name: 'Israel', lastName: 'Mern', email: 'isra@mail.com', phone: '12213213', avatar: require('../../images/chems.jpeg') },
    ]

    return <View>
        {teamMembers.map(member => (
            <UserCard name={member.name} lastName={member.lastName} email={member.email} phone={member.phone} avatar={member.avatar} />
        ))}
    </View>
}

export default TeamMembersScreen;