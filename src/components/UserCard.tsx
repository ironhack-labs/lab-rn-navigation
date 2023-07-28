/* eslint-disable react/react-in-jsx-scope */
import {View, Text, StyleSheet, Image} from 'react-native';
import {UserProfile} from '../navigation/MyStack';

interface CardProps {
  userProfile: UserProfile;
}

export const UserCard = ({userProfile}: CardProps) => {
  return (
    <View style={styles.row}>
      <View style={{flex: 3}}>
        <Image
          source={{uri: userProfile.avatar}}
          style={{width: 50, height: 50}}
        />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.title}>
          {userProfile.name} {userProfile.lastName}
        </Text>
        <Text style={styles.text}>{userProfile.email}</Text>
        <Text style={styles.text}>{userProfile.phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'black',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  cardInfo: {
    flex: 7,
    backgroundColor: '#888',
    margin: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  title: {
    marginVertical: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    marginVertical: 5,
    color: 'white',
  },
});
