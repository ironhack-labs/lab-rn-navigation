import React from 'react';
import {FlatList} from 'react-native';

import type {MembersScreenProps} from '../../navigation/main-navigation.types';
import {UserCard} from '../../components';

export const MembersScreen = ({route}: MembersScreenProps) => {
  const {users} = route.params;

  return (
    <FlatList
      contentContainerStyle={{rowGap: 20}}
      data={users}
      renderItem={({item: user}) => <UserCard {...user} />}
      keyExtractor={item => item.email}
    />
  );
};
