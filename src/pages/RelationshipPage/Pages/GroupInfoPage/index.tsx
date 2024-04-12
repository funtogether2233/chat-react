import { useEffect } from 'react';
import styles from './GroupInfoPage.module.less';

export default function GroupInfoPage() {
  useEffect(() => {
    console.log('GroupInfoPage');
  });

  return <div className={styles.groupInfoPage}>GroupInfoPage</div>;
}
