import React from 'react'
import { Text, View } from 'react-native'
import UserCard from '../components/UserCard'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/MainNavigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ButtonStyle } from '../theme/Buttons.style';

type Props = StackScreenProps<RootStackParamList, 'Profile'>;

const Profile = ({ navigation, route }: Props) => {

    const { user } = route.params

    return (
        <View style={{ flex: 1, paddingTop: 5 }}>
            <UserCard user={user} />
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={ButtonStyle.container}>
                <Text style={ButtonStyle.text}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile