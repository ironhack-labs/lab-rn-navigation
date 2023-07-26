import React from 'react';
import {SafeAreaView, Image, View, Text} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import type {StackParamList} from '../../types/Stack.type';

import {PROFILE} from '../../constants/routes';

import {GoBack} from '../../components';

import styles from './styles';

type InfoItemProps = {
  label: string;
  value: string | undefined;
};

const InfoItem = ({label, value}: InfoItemProps) => (
  <View style={styles.infoItemContainer}>
    <Text style={styles.infoItemLabel}>{label}</Text>
    {!!value && <Text style={styles.infoItemValue}>{value}</Text>}
  </View>
);

const Profile = () => {
  const {params} = useRoute<RouteProp<StackParamList, typeof PROFILE>>();

  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{uri: params?.userInfo.avatar}}
          />
          <Text style={styles.fullName}>
            {params?.userInfo.name} {params?.userInfo.lastName}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <InfoItem label={'Email'} value={params?.userInfo.email} />
          <InfoItem label={'Teléfono'} value={params?.userInfo.phone} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
