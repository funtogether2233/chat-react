import { useEffect } from 'react';
import styles from './DocContent.module.less';

export default function DocContent() {
  useEffect(() => {
    console.log('DocContent');
  });

  return <div className={styles.docContent}>DocContent</div>;
}
