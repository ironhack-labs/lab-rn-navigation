import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import TeamMembers from '../screens/TeamMembers'
import { User } from '../types/User'

export type RootStackParamList = {
    Home: undefined;
    Profile: { user: User }
    TeamMembers: { users: User[] };
};

const Stack = createStackNavigator<RootStackParamList>()



const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='TeamMembers' component={TeamMembers} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation