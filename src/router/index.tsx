import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const HomePage = React.lazy(() => import('../pages/HomePage'));
const ChatPage = React.lazy(() => import('../pages/ChatPage'));
const DocPage = React.lazy(() => import('../pages/DocPage'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/login"></Navigate> },
  { path: 'login', element: <LoginPage></LoginPage> },
  {
    path: 'home',
    element: <HomePage></HomePage>,
    children: [
      { path: 'chat', element: <ChatPage></ChatPage> },
      { path: 'doc', element: <DocPage></DocPage> }
    ]
  },

  { path: '*', element: <NotFoundPage></NotFoundPage> }
];
