import { useEffect } from 'react';
import ListWrap from '../../components/ListWrap';
import styles from './ChatPage.module.less';

export default function ChatPage() {
  useEffect(() => {
    console.log('ChatPage');
  });

  return (
    <div className={styles.chatPage}>
      <ListWrap></ListWrap>ChatPage
    </div>
  );
}
