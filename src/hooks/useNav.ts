import { useNavigate } from 'react-router-dom';
import { routerEnum } from '../router';
import { useUserContext } from './useUserContext';

export function useNav() {
  const {
    isLogin,
    homeNavState,
    setCurFriendId,
    setCurGroupId,
    setHomeNavState
  } = useUserContext();
  const nav = useNavigate();

  const homeNavNavigate = (newNavState: routerEnum) => {
    if (homeNavState === newNavState) {
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
    homeNavNavigate(routerEnum.myInfo);
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
  const navToPost = () => {
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
