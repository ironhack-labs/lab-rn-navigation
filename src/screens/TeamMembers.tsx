import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { FlatList, View, Text } from 'react-native'
import { RootStackParamList } from '../navigation/MainNavigation';
import UserCard from '../components/UserCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ButtonStyle } from '../theme/Buttons.style';

type Props = StackScreenProps<RootStackParamList, 'TeamMembers'>;

const TeamMembers = ({ navigation, route }: Props) => {

    const { users } = route.params
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                contentContainerStyle={{ paddingVertical: 10 }}
                renderItem={({ item }) => <UserCard user={item} />}
                data={users}
                keyExtractor={(item) => item.email.toString()}
                ListFooterComponent={
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={ButtonStyle.container}>
                        <Text style={ButtonStyle.text}>Go Back</Text>
                    </TouchableOpacity>
                }
            />

        </View >
    )
}

export default TeamMembers