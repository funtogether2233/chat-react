import { useNavigate } from 'react-router-dom';
import { routerEnum } from '../router';
import { useUserContext } from './useUserContext';

export function useNav() {
  const {
    isLogin,
    homeNavState,
    setCurFriendId,
    setCurGroupId,
    setPostId,
    setHomeNavState
  } = useUserContext();
  const nav = useNavigate();

  const homeNavNavigate = (newNavState: routerEnum, verifyState = true) => {
    if (verifyState && homeNavState === newNavState) {
      return;
    }
    setHomeNavState(newNavState);
    nav(newNavState);
  };

  const navToLogin = () => {
    nav(routerEnum.login);
  };
  const navToHome = () => {
    nav(routerEnum.home);
  };
  const navToRelationship = () => {
    homeNavNavigate(routerEnum.relationship);
  };
  const navToFriendChat = (newFriendId: string) => {
    setCurFriendId(newFriendId);
    nav(routerEnum.friendChat);
  };
  const navToGroupChat = (newGroupId: string) => {
    setCurGroupId(newGroupId);
    nav(routerEnum.groupChat);
  };
  const navToMyInfo = () => {
    homeNavNavigate(routerEnum.myInfo, false);
  };
  const navToFriendInfo = () => {
    nav(routerEnum.friendInfo);
  };
  const navToGroupInfo = () => {
    nav(routerEnum.groupInfo);
  };
  const navToDoc = () => {
    homeNavNavigate(routerEnum.doc);
  };
  const navToPost = (newPostId = '') => {
    setPostId(newPostId);
    homeNavNavigate(routerEnum.post);
  };

  const authLogin = () => {
    if (!isLogin) {
      navToLogin();
    }
  };

  return {
    navToHome,
    navToRelationship,
    navToFriendChat,
    navToGroupChat,
    navToMyInfo,
    navToFriendInfo,
    navToGroupInfo,
    navToDoc,
    navToPost,
    authLogin
  };
}
