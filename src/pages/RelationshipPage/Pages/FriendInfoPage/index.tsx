import { useEffect } from 'react';
import styles from './FriendInfoPage.module.less';

export default function FriendInfoPage() {
  useEffect(() => {
    console.log('FriendInfoPage');
  });

  return <div className={styles.friendInfoPage}>FriendInfoPage</div>;
}
