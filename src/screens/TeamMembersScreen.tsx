import { ScrollView } from 'react-native';
import { UserCard, UserCardT } from '../components/UserCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GoBackButton } from '../components/GoBackButton';
import styles from '../theme/TeamMembers.styles';

const teamMembers: UserCardT[] = [
  {
    name: 'Claudia',
    lastName: 'Vega',
    email: 'cxxxx@gmail.com',
    phone: 22222222,
    avatar: require('../../assets/avatar.png'),
  },
  {
    name: 'Ilse',
    lastName: 'Vega',
    email: 'ixxxx@gmail.com',
    phone: 3333333333,
    avatar: require('../../assets/avatar.png'),
  },
  {
    name: 'Rody',
    lastName: 'Guzman',
    email: 'rxxxx@gmail.com',
    phone: 4444444444,
    avatar: require('../../assets/avatar.png'),
  },
  {
    name: 'Valeria',
    lastName: 'Gaxiola',
    email: 'vxxxx@gmail.com',
    phone: 5555555555,
    avatar: require('../../assets/avatar.png'),
  },
  {
    name: 'Araceli',
    lastName: 'Soto',
    email: 'axxxx@gmail.com',
    phone: 6666666666,
    avatar: require('../../assets/avatar.png'),
  },
];

export function TeamMembersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <GoBackButton />
        {teamMembers.map((member, index) => (
          <UserCard
            name={member.name}
            email={member.email}
            phone={member.phone}
            avatar={member.avatar}
            key={`user-card${index}`}
            lastName={member.lastName}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
