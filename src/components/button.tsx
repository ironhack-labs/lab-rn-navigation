import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  onPress: () => void;
  text: string;
  secondary?: boolean;
}

export default function UserCard({ onPress, text, secondary }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        secondary ? { backgroundColor: 'aliceblue' } : null,
      ]}
      onPress={onPress}>
      <Text style={[styles.textButton, secondary ? { color: '#666' } : null]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textButton: {
    color: 'white',
    fontWeight: '600',
  },
});
