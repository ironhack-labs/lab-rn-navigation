import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen/homeScreen';
import MemberScreen from '../screens/memberScreen/memberScreen';
import ProfileScreen from '../screens/profileScreen/profileScreen';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Members: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Members"
        component={MemberScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
