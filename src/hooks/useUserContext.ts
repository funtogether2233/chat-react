import { useContext } from 'react';
import { routerEnum } from '../router';
import { UserContext } from '../store';

export function useUserContext() {
  const userContext = useContext(UserContext);
  const userInfo = userContext!.userInfo;
  const setUserInfo = userContext!.setUserInfo;

  const setCurFriendId = (newFriendId: string) => {
    setUserInfo((cur) => ({ ...cur, curFriendId: newFriendId }));
  };

  const setCurGroupId = (newGroupId: string) => {
    setUserInfo((cur) => ({ ...cur, curGroupId: newGroupId }));
  };

  const setPostId = (newPostId: string) => {
    setUserInfo((cur) => ({ ...cur, postId: newPostId }));
  };

  const setHomeNavState = (newHomeNavState: routerEnum) => {
    setUserInfo((cur) => ({ ...cur, homeNavState: newHomeNavState }));
  };

  return {
    userInfo,
    setUserInfo,
    userId: userInfo.userId,
    curFriendId: userInfo.curFriendId,
    curGroupId: userInfo.curGroupId,
    isLogin: userInfo.isLogin,
    homeNavState: userInfo.homeNavState,
    setCurFriendId,
    setCurGroupId,
    setPostId,
    setHomeNavState
  };
}
