import { useNavigate } from 'react-router-dom';
import { routerEnum } from '../router';
import { useUserContext } from './useUserContext';

export function useNav() {
  const {
    isLogin,
    homeNavState,
    curDocId,
    setCurFriendId,
    setCurGroupId,
    setCurDocId,
    setCurPostUserId,
    setCurPostId,
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
    homeNavNavigate(routerEnum.home, false);
  };

  const navToRelationship = () => {
    homeNavNavigate(routerEnum.relationship);
  };
  const navToFriendChat = (newFriendId: string) => {
    setCurFriendId(newFriendId);
    homeNavNavigate(routerEnum.friendChat);
  };
  const navToGroupChat = (newGroupId: string) => {
    setCurGroupId(newGroupId);
    homeNavNavigate(routerEnum.groupChat);
  };
  const navToMyInfo = () => {
    homeNavNavigate(routerEnum.myInfo, false);
  };
  const navToFriendInfo = () => {
    homeNavNavigate(routerEnum.friendInfo);
  };
  const navToGroupInfo = () => {
    homeNavNavigate(routerEnum.groupInfo);
  };
  const navToSubmitMyInfo = () => {
    homeNavNavigate(routerEnum.submitMyInfo);
  };
  const navToSubmitGroupInfo = () => {
    homeNavNavigate(routerEnum.submitGroupInfo);
  };
  const navToAddRelationship = () => {
    homeNavNavigate(routerEnum.addRelationship);
  };
  const navToInviteGroupMember = () => {
    homeNavNavigate(routerEnum.inviteGroupMember);
  };
  const navToSetUpGroup = () => {
    homeNavNavigate(routerEnum.setUpGroupPage);
  };

  const navToMessage = () => {
    homeNavNavigate(routerEnum.message);
  };

  const navToDoc = () => {
    homeNavNavigate(routerEnum.doc);
  };
  const navToDocInfo = (newDoctId = curDocId) => {
    setCurDocId(newDoctId);
    homeNavNavigate(routerEnum.docInfo);
  };
  const navToSubmitDocInfo = () => {
    homeNavNavigate(routerEnum.submitDocInfo);
  };

  const navToPost = (newPostUserId = '') => {
    setCurPostUserId(newPostUserId);
    homeNavNavigate(routerEnum.post);
  };
  const navToPostDetail = (newPostId: string) => {
    setCurPostId(newPostId);
    homeNavNavigate(routerEnum.postDetail);
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
    navToSubmitMyInfo,
    navToSubmitGroupInfo,
    navToAddRelationship,
    navToInviteGroupMember,
    navToSetUpGroup,
    navToMessage,
    navToDoc,
    navToDocInfo,
    navToSubmitDocInfo,
    navToPost,
    navToPostDetail,
    authLogin
  };
}
