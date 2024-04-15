import { createContext } from 'react';
import { routerEnum } from '../router';

export interface IUserInfo {
  userId: string;
  curFriendId: string;
  curGroupId: string;
  postId: string;
  isLogin: boolean;
  homeNavState: routerEnum;
}

interface IUserContext {
  userInfo: IUserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo>>;
}

export const UserContext = createContext<IUserContext | null>(null);
