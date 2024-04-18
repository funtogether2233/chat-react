import { useEffect } from 'react';
import styles from './SubmitMyInfoPage.module.less';

export default function SubmitMyInfoPage() {
  useEffect(() => {
    console.log('SubmitMyInfoPage');
  });

  return <div className={styles.submitMyInfoPage}>SubmitMyInfoPage</div>;
}
