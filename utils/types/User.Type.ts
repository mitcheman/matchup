import { SignUp } from './SignUp.Type';
import { Update } from './Update.Type';
import { WatchList } from './WatchList.Type';
import { SignUpsReturn } from './SignUp.Type';

export interface User {
  id?: string;
  givenName: string;
  familyName: string;
  email: string;
  signups: SignUpsReturn;
  profileImage: string;
  about: string;
  updates: Update[];
  watchList: WatchList[];
}

export interface UsersReturn {
  items: User[];
  nextToken: string | null;
  startedAt: string | null;
}
