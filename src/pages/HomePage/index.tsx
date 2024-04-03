import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNav } from '../../hooks/useNav';
import styles from './HomePage.module.less';
import ChatNav from './components/HomeNav/HomeNav';

export default function HomePage() {
  useEffect(() => {
    console.log('ChatPage');
    authLogin();
  });

  const { authLogin } = useNav();

  return (
    <div className={styles.chat}>
      <ChatNav></ChatNav>
      <Outlet></Outlet>
    </div>
  );
}
