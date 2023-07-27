import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {goBackButtonStyles} from '../theme/GoBackButton.styles';

const GoBackButton = () => {
  const {canGoBack, goBack} = useNavigation();
  return (
    <TouchableOpacity
      style={goBackButtonStyles.button}
      onPress={() => canGoBack() && goBack()}>
      <Text style={goBackButtonStyles.text}>Go Back</Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;
