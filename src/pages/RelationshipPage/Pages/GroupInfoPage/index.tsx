import { useEffect } from 'react';
import styles from './GroupInfoPage.module.less';
import GroupInfoDetail from './components/GroupInfoDetail';
import GroupMemberList from './components/GroupMemberList';

export default function GroupInfoPage() {
  useEffect(() => {
    console.log('GroupInfoPage');
  });

  return (
    <div className={styles.groupInfoPage}>
      <GroupInfoDetail></GroupInfoDetail>
      <GroupMemberList></GroupMemberList>
    </div>
  );
}
