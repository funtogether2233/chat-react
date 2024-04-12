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
const DocPage = React.lazy(() => import('../pages/DocPage'));
const PostPage = React.lazy(() => import('../pages/PostPage'));
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
  doc = 'doc',
  post = 'post'
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
  doc = home + '/' + routerNameEnum.doc,
  post = home + '/' + routerNameEnum.post
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
          }
        ]
      },
      { path: routerNameEnum.doc, element: <DocPage></DocPage> },
      { path: routerNameEnum.post, element: <PostPage></PostPage> }
    ]
  },
  { path: '*', element: <NotFoundPage></NotFoundPage> }
];
