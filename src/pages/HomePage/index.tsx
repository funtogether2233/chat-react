import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNav } from '../../hooks/useNav';
import styles from './HomePage.module.less';
import HomeNav from './components/HomeNav';

export default function HomePage() {
  useEffect(() => {
    console.log('HomePage');
    authLogin();
  });

  const { authLogin } = useNav();

  return (
    <div className={styles.chat}>
      <HomeNav></HomeNav>
      <Outlet></Outlet>
    </div>
  );
}
