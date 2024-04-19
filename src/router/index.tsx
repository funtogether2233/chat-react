import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const LoginPage = React.lazy(() => import('../pages/LoginPage'));

const HomePage = React.lazy(() => import('../pages/HomePage'));

const RelationshipPage = React.lazy(() => import('../pages/RelationshipPage'));
const FriendChatPage = React.lazy(
  () => import('../pages/RelationshipPage/Pages/FriendChatPage')
);
const GroupChatPage = React.lazy(
  () => import('../pages/RelationshipPage/Pages/GroupChatPage')
);
const MyInfoPage = React.lazy(
  () => import('../pages/RelationshipPage/Pages/MyInfoPage')
);
const FriendInfoPage = React.lazy(
  () => import('../pages/RelationshipPage/Pages/FriendInfoPage')
);
const GroupInfoPage = React.lazy(
  () => import('../pages/RelationshipPage/Pages/GroupInfoPage')
);
const SubmitMyInfoPage = React.lazy(
  () => import('../pages/RelationshipPage/Pages/SubmitMyInfoPage')
);
const SubmitGroupInfoPage = React.lazy(
  () => import('../pages/RelationshipPage/Pages/SubmitGroupInfoPage')
);
const AddRelationshipPage = React.lazy(
  () => import('../pages/RelationshipPage/Pages/AddRelationshipPage')
);
const InviteGroupMemberPage = React.lazy(
  () => import('../pages/RelationshipPage/Pages/InviteGroupMemberPage')
);
const SetUpGroupPage = React.lazy(
  () => import('../pages/RelationshipPage/Pages/SetUpGroupPage')
);

const Message = React.lazy(() => import('../pages/MessagePage'));

const DocPage = React.lazy(() => import('../pages/DocPage'));

const PostPage = React.lazy(() => import('../pages/PostPage'));
const PostDetailPage = React.lazy(
  () => import('../pages/PostPage/Pages/PostDetailPage')
);

const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

export enum routerNameEnum {
  login = 'login',
  home = 'home',
  relationship = 'relationship',
  friendChat = 'friend-chat',
  groupChat = 'group-chat',
  myInfo = 'my-info',
  friendInfo = 'friend-info',
  groupInfo = 'group-info',
  submitMyInfo = 'submit-my-info',
  submitGroupInfo = 'submit-group-info',
  addRelationship = 'add-relationship',
  inviteGroupMember = 'inviteGroupMember',
  setUpGroup = 'set-up-group',
  message = 'message',
  doc = 'doc',
  post = 'post',
  postDetail = 'postDetail'
}

export enum routerEnum {
  login = '/' + routerNameEnum.login,
  home = '/' + routerNameEnum.home,
  relationship = home + '/' + routerNameEnum.relationship,
  friendChat = relationship + '/' + routerNameEnum.friendChat,
  groupChat = relationship + '/' + routerNameEnum.groupChat,
  myInfo = relationship + '/' + routerNameEnum.myInfo,
  friendInfo = relationship + '/' + routerNameEnum.friendInfo,
  groupInfo = relationship + '/' + routerNameEnum.groupInfo,
  submitMyInfo = relationship + '/' + routerNameEnum.submitMyInfo,
  submitGroupInfo = relationship + '/' + routerNameEnum.submitGroupInfo,
  addRelationship = relationship + '/' + routerNameEnum.addRelationship,
  inviteGroupMember = relationship + '/' + routerNameEnum.inviteGroupMember,
  setUpGroupPage = relationship + '/' + routerNameEnum.setUpGroup,
  message = home + '/' + routerNameEnum.message,
  doc = home + '/' + routerNameEnum.doc,
  post = home + '/' + routerNameEnum.post,
  postDetail = post + '/' + routerNameEnum.postDetail
}

export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to={routerEnum.login}></Navigate> },
  { path: routerNameEnum.login, element: <LoginPage></LoginPage> },
  {
    path: routerNameEnum.home,
    element: <HomePage></HomePage>,
    children: [
      {
        path: routerNameEnum.relationship,
        element: <RelationshipPage></RelationshipPage>,
        children: [
          {
            path: routerNameEnum.friendChat,
            element: <FriendChatPage></FriendChatPage>
          },
          {
            path: routerNameEnum.groupChat,
            element: <GroupChatPage></GroupChatPage>
          },
          { path: routerNameEnum.myInfo, element: <MyInfoPage></MyInfoPage> },
          {
            path: routerNameEnum.friendInfo,
            element: <FriendInfoPage></FriendInfoPage>
          },
          {
            path: routerNameEnum.groupInfo,
            element: <GroupInfoPage></GroupInfoPage>
          },
          {
            path: routerNameEnum.submitMyInfo,
            element: <SubmitMyInfoPage></SubmitMyInfoPage>
          },
          {
            path: routerNameEnum.submitGroupInfo,
            element: <SubmitGroupInfoPage></SubmitGroupInfoPage>
          },
          {
            path: routerNameEnum.addRelationship,
            element: <AddRelationshipPage></AddRelationshipPage>
          },
          {
            path: routerNameEnum.inviteGroupMember,
            element: <InviteGroupMemberPage></InviteGroupMemberPage>
          },
          {
            path: routerNameEnum.setUpGroup,
            element: <SetUpGroupPage></SetUpGroupPage>
          }
        ]
      },
      { path: routerNameEnum.message, element: <Message></Message> },
      { path: routerNameEnum.doc, element: <DocPage></DocPage> },
      {
        path: routerNameEnum.post,
        element: <PostPage></PostPage>,
        children: [
          {
            path: routerNameEnum.postDetail,
            element: <PostDetailPage></PostDetailPage>
          }
        ]
      }
    ]
  },
  { path: '*', element: <NotFoundPage></NotFoundPage> }
];
