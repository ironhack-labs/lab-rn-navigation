import {Avatar, Box, HStack, Text} from 'native-base';
import {StyleSheet, View} from 'react-native';
import {UserCard} from './userCard';

const Card = ({
  name,
  lastName,
  email,
  phone,
  avatar,
}: UserCard): JSX.Element => {
  return (
    <Box style={styles.card}>
      <HStack space={3} alignItems={"center"} justifyContent={"center"}>
        <Avatar size={'lg'} bg="#f2f2f2">
          <Text style={styles.textAvatar}>{avatar}</Text>
        </Avatar>
        <View style={styles.cardInfo}>
          <Text style={styles.text}>
            {name} {lastName}
          </Text>
          <Text style={styles.text}>{email}</Text>
          <Text style={styles.textPhone}>{phone}</Text>
        </View>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    backgroundColor: '#333333',
    borderRadius: 8,
    marginBottom: 10,
    padding: 5,
  },
  textAvatar: {
    color: '#000000',
  },
  cardInfo: {
    backgroundColor: '#858383',
    width: 250,
    borderRadius: 4,
    padding: 5,
  },
  text: {
    color: '#ffffff',
  },
  textPhone: {
    color: '#ffffff',
    marginTop: 15
  },
});

export default Card;
