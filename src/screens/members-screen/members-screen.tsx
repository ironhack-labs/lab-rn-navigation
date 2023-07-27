import React from 'react';
import {View} from 'react-native';

import type {MembersProps} from '../../navigation/main-navigation.types';
import {MenuButton} from '../../components';

export const MembersScreen = ({navigation}: MembersProps) => {
  return (
    <View>
      <View style={{rowGap: 20}}>
        <MenuButton onPress={() => navigation.navigate('Home')}>
          Home
        </MenuButton>
      </View>
    </View>
  );
};
