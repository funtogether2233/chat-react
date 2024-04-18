import GroupMemberItem from '../GroupMemberItem';
import styles from './GroupMemberList.module.less';

export default function GroupMemberList() {
  return (
    <div className={styles.groupMemberList}>
      <GroupMemberItem></GroupMemberItem>
    </div>
  );
}
