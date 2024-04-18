import { useEffect } from 'react';
import styles from './SetUpGroupPage.module.less';

export default function SetUpGroupPage() {
  useEffect(() => {
    console.log('SetUpGroupPage');
  });

  return <div className={styles.setUpGroupPage}>SetUpGroupPage</div>;
}
