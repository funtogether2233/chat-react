import { useNavigate } from 'react-router-dom';
import { routerEnum } from '../router';
import { useUserContext } from './useUserContext';

export function useNav() {
  const { userInfo } = useUserContext();
  const nav = useNavigate();
  const isLogin = userInfo.isLogin;

  const navToLogin = () => {
    nav(routerEnum.login);
  };
  const navToRelationship = () => {
    nav(routerEnum.relationship);
  };
  const navToFriendChat = () => {
    nav(routerEnum.friendChat);
  };
  const navToGroupChat = () => {
    nav(routerEnum.groupChat);
  };
  const navToMyInfo = () => {
    nav(routerEnum.myInfo);
  };
  const navToFriendInfo = () => {
    nav(routerEnum.friendInfo);
  };
  const navToGroupInfo = () => {
    nav(routerEnum.groupInfo);
  };
  const navToDoc = () => {
    nav(routerEnum.doc);
  };
  const navToPost = () => {
    nav(routerEnum.post);
  };

  const authLogin = () => {
    if (!isLogin) {
      navToLogin();
    }
  };

  return {
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
