import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import type {StackParamList} from '../../types/Stack.type';

import styles from './styles';

const GoBack = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>‣</Text>
        </View>
        <Text style={styles.text}>Volver</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoBack;
