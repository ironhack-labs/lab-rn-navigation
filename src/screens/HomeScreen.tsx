import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../App';

type HomeProps = NativeStackScreenProps<RootStackParamList>;

export function HomeScreen({navigation}: HomeProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />

      <Button
        title="Go to Team Members"
        onPress={() => navigation.navigate('Team')}
      />
    </View>
  );
}
