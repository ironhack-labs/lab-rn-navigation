import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RootStackParamList } from '../navigation/MainNavigation';
import { ButtonStyle } from '../theme/Buttons.style';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const user = {
    name: 'Bacilio',
    lastName: 'Gonzalez',
    email: 'bacilio.gonzalez@digitalfemsa.com',
    phone: '1234567890',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
}

const users = [
    {
        id: 1,
        name: 'Bacilio',
        lastName: 'Gonzalez',
        email: 'bacilio.gonzalez@digitalfemsa.com',
        phone: '1234567890',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
    },
    {
        id: 2,
        name: 'Pepe',
        lastName: 'Quintero',
        email: 'pepequin@test.com',
        phone: '0987654321',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
    },
    {
        id: 3,
        name: 'Checo',
        lastName: 'Perez',
        email: 'perezchec@test.com',
        phone: '0987654321',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
    }



]

const Home = ({ navigation }: Props) => {


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                style={ButtonStyle.container}
                onPress={() => navigation.navigate('Profile', { user: user })}>
                <Text style={ButtonStyle.text}>Go to Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={ButtonStyle.container}
                onPress={() => navigation.navigate('TeamMembers', { users: users })}>
                <Text style={ButtonStyle.text}>Go to Team Members</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home