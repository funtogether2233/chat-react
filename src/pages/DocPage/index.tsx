import { useEffect } from 'react';
import ListWrap from '../../components/ListWrap';
import styles from './DocPage.module.less';
import DocContent from './components/DocContent';

export default function DocPage() {
  useEffect(() => {
    console.log('DocPage');
  });

  return (
    <div className={styles.docPage}>
      <ListWrap></ListWrap>
      <DocContent></DocContent>
    </div>
  );
}
