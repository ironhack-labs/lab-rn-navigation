import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import UserCard from '../components/UserCard';

const data = [
  {email: 'invalid@address.com', name: 'Mike', phone: '7856231425'},
  {email: 'generic@email.com', name: 'Max', phone: '1946798565'},
  {email: 'noop@my.email.com', name: 'Dustin', phone: '1354789432'},
  {email: 'qwerty@random.com', name: 'Luck', phone: '2578963245'},
  {
    email: 'invented@img.com',
    name: 'Eleven',
    phone: '5678451223',
  },
];

const TeamMembersScreen = () => { 

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.email}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item: user}) => (
          <UserCard
            avatar="https://i.pravatar.cc/300"
            email={user.email}
            name={user.name}
            phone={user.phone}
            key={user.email}
          />
        )}
      />
    </View>
  );
};

export default TeamMembersScreen;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        padding: 16,
    },
    separator:{
        marginTop: 16,
    }
});
