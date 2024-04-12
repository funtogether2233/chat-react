import { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './router';
import { IUserInfo, UserContext } from './store';

export default function App() {
  useEffect(() => {
    console.log('APP');
  });

  const [userInfo, setUserInfo] = useState<IUserInfo>({
    userId: '',
    curFriendId: '',
    curGroupId: '',
    isLogin: false
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {useRoutes(routes)}
    </UserContext.Provider>
  );
}
