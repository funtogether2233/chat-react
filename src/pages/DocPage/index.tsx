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
      <ListWrap>
        <div className={styles.testDoc}>测试文档</div>
      </ListWrap>
      <DocContent></DocContent>
    </div>
  );
}
