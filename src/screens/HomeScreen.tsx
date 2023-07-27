// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to My App</Text>
      <Text style={styles.subHeading}>What would you like to do?</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="View Profile"
          onPress={() => navigation.navigate('Profile')}
          color="#007bff"
        />
        <View style={styles.buttonSpacer} />
        <Button
          title="View Team Members"
          onPress={() => navigation.navigate('TeamMembers')}
          color="#007bff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#007bff',
  },
  subHeading: {
    fontSize: 18,
    marginBottom: 32,
    color: '#007bff',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonSpacer: {
    width: 16,
  },
});

export default HomeScreen;
