import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import md5 from 'js-md5';

interface User {
  name: string;
  lastName: string;
  email: string;
  phone: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Generate the Gravatar hash
    const gravatarHash = md5(user.email.trim().toLowerCase());

    // Set the avatar URL using the Gravatar hash
    setAvatarUrl(`https://www.gravatar.com/avatar/${gravatarHash}`);
  }, [user.email]);

  return (
    <View style={styles.card}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: avatarUrl || 'https://via.placeholder.com/150' }}
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{user.name} {user.lastName}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Phone: {user.phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  userInfo: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default UserCard;
