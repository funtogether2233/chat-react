import { useNavigate } from 'react-router-dom';
import { useUserContext } from './useUserContext';

export function useNav() {
  const { userInfo } = useUserContext();
  const nav = useNavigate();
  const isLogin = userInfo.isLogin;

  const authLogin = () => {
    if (!isLogin) {
      nav('/login');
    }
  };

  return { authLogin };
}
