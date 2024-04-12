import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './RelationshipPage.module.less';
import ChatList from './components/ChatList';

export enum relaStateEnum {
  friend = 'friend',
  group = 'group'
}

export default function RelationshipPage() {
  useEffect(() => {
    console.log('RelationshipPage');
  });

  const [relaState, setRelaState] = useState(relaStateEnum.friend);

  return (
    <div className={styles.chatPage}>
      <ChatList relaState={relaState} setRelaState={setRelaState}></ChatList>
      <Outlet></Outlet>
    </div>
  );
}
