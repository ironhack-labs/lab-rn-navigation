import {HOME, PROFILE, TEAM_MEMBERS} from '../constants/routes';
import type {ProfileType} from './Profile.type';

export type StackParamList = {
  [HOME]: undefined;
  [PROFILE]: {userInfo: ProfileType};
  [TEAM_MEMBERS]: {team: ProfileType[]};
};
