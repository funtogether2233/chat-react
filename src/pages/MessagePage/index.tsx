import { useEffect } from 'react';
import styles from './MessagePage.module.less';

export default function MessagePage() {
  useEffect(() => {
    console.log('MessagePage');
  });

  return <div className={styles.messagePage}>MessagePage</div>;
}
