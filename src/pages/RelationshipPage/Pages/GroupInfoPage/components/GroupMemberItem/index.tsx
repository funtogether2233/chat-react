import Avatar from '../../../../../../components/Avatar';
import ListItemWrap from '../../../../../../components/ListItemWrap';
import styles from './GroupMemberItem.module.less';

export default function GroupMemberItem() {
  return (
    <ListItemWrap height={80} paddingX={40}>
      <div className={styles.groupMemberItem}>
        <div className={styles.memberInfo}>
          <Avatar size={60}></Avatar>
          <div className={styles.userName}>{'userName'}</div>
          <div className={styles.userStatus}>{'userStatus'}</div>
        </div>
        <div className={styles.btnWrap}>
          <div className={styles.btn}>设为管理员</div>
          <div className={styles.btn}>踢出群聊</div>
        </div>
      </div>
    </ListItemWrap>
  );
}
