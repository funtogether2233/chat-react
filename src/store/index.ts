import { createContext } from 'react';
import { routerEnum } from '../router';

export interface IGlobalInfo {
  userId: string;
  curFriendId: string;
  curGroupId: string;
  curDocId: string;
  curPostUserId: string;
  curPostId: string;
  isLogin: boolean;
  homeNavState: routerEnum;
}

interface IUserContext {
  userInfo: IGlobalInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<IGlobalInfo>>;
}

export const UserContext = createContext<IUserContext | null>(null);
