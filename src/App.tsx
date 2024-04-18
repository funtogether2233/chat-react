import { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { routerEnum, routes } from './router';
import { IGlobalInfo, UserContext } from './store';

export default function App() {
  useEffect(() => {
    console.log('APP');
  });

  const [userInfo, setUserInfo] = useState<IGlobalInfo>({
    userId: '',
    curFriendId: '',
    curGroupId: '',
    postId: '',
    isLogin: false,
    homeNavState: routerEnum.home
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {useRoutes(routes)}
    </UserContext.Provider>
  );
}
