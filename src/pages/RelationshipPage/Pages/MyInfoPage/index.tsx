import { useEffect } from 'react';
import styles from './MyInfoPage.module.less';

export default function MyInfoPage() {
  useEffect(() => {
    console.log('MyInfoPage');
  });

  return <div className={styles.myInfoPage}>MyInfoPage</div>;
}
