import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {menuButtonStyles} from '../theme/MenuButton.styles';

type Props = {text: string; onPress: () => void};

const MenuButton: FC<Props> = ({text, onPress}) => {
  return (
    <TouchableOpacity style={menuButtonStyles.button} onPress={onPress}>
      <View style={menuButtonStyles.buttonInfoContainer}>
        <Text style={menuButtonStyles.buttonText}>{text}</Text>
        <Text children="▶" style={menuButtonStyles.buttonIcon} />
      </View>
    </TouchableOpacity>
  );
};

export default MenuButton;
