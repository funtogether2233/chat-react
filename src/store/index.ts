import { createContext } from 'react';

export interface IUserInfo {
  userId: string;
  isLogin: boolean;
}

interface IUserContext {
  userInfo: IUserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo>>;
}

export const UserContext = createContext<IUserContext | null>(null);