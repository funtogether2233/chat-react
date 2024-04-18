import { useEffect } from 'react';
import styles from './SubmitGroupInfoPage.module.less';

export default function SubmitGroupInfoPage() {
  useEffect(() => {
    console.log('SubmitGroupInfoPage');
  });

  return <div className={styles.submitGroupInfoPage}>SubmitGroupInfoPage</div>;
}
