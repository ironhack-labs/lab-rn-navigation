import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface TitleProps {
  title: string;
}

const ScreenTitle = ({title}: TitleProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 25,
  },
});

export default ScreenTitle;
