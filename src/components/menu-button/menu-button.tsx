import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import React from 'react';

import {menuButtonStyles} from './menu-button.styles';

type MenuButtonProps = Pick<TouchableOpacityProps, 'onPress' | 'children'>;

export const MenuButton = ({onPress, children}: MenuButtonProps) => (
  <TouchableOpacity style={menuButtonStyles.button} onPress={onPress}>
    <Text style={menuButtonStyles.text}>{children}</Text>
  </TouchableOpacity>
);
