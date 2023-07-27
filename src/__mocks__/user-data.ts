import type {User} from '../models';

export const USER_DATA: User = {
  name: 'Ramses',
  lastName: 'De La Peña',
  email: 'ramses.delapena@digitalfemsa.com',
  phone: '8443813001',
  avatar:
    'https://www.gravatar.com/avatar/219e08dc1094659300ca356a9a960305?s=200&d=retro',
};

export const MEMBERS_DATA: User[] = [
  USER_DATA,
  {
    name: 'John',
    lastName: 'Smith',
    email: 'john.smith@gmail.com',
    phone: '844123001',
    avatar:
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=retro',
  },
  {
    name: 'Jerry',
    lastName: 'Smith',
    email: 'jerry.smith@gmail.com',
    phone: '844123002',
    avatar:
      'https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=retro',
  },
  {
    name: 'Larry',
    lastName: 'Smith',
    email: 'larry.smith@gmail.com',
    phone: '844123003',
    avatar:
      'https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=robohash',
  },
  {
    name: 'Beth',
    lastName: 'Smith',
    email: 'beth.smith@gmail.com',
    phone: '844123004',
    avatar:
      'https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=monsterid',
  },
  {
    name: 'Carl',
    lastName: 'Smith',
    email: 'carl.smith@gmail.com',
    phone: '844123005',
    avatar:
      'https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=identicon',
  },
];
