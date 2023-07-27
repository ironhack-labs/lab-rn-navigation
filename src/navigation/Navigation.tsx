import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TeamMembersScreen from '../screens/TeamMembersScreen';



const Stack = createStackNavigator();

const Navigation = () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="TeamMembers" component={TeamMembersScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default Navigation;