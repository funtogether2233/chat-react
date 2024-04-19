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

  const setCurPostUserId = (newPostUserId: string) => {
    setUserInfo((cur) => ({ ...cur, curPostUserId: newPostUserId }));
  };

  const setCurPostId = (newPostId: string) => {
    setUserInfo((cur) => ({ ...cur, curPostId: newPostId }));
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
    curPostUserId: userInfo.curPostUserId,
    curPostId: userInfo.curPostId,
    isLogin: userInfo.isLogin,
    homeNavState: userInfo.homeNavState,
    setCurFriendId,
    setCurGroupId,
    setCurPostUserId,
    setCurPostId,
    setHomeNavState
  };
}
