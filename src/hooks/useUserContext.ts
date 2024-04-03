import { useContext } from 'react';
import { UserContext } from '../store';

export function useUserContext() {
  const userContext = useContext(UserContext);
  const userInfo = userContext!.userInfo;
  const setUserInfo = userContext!.setUserInfo;
  return { userInfo, setUserInfo };
}
