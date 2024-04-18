import Avatar from '../../../../../../components/Avatar';
import styles from './GroupInfoDetail.module.less';

export default function GroupInfoDetail() {
  return (
    <div className={styles.groupInfoDetail}>
      <Avatar size={100}></Avatar>
      <div className={styles.userName}>groupName</div>
      <div className={styles.userId}>groupId</div>
      <div className={styles.userIntroduction}>个性签名</div>
      <div className={styles.btnWrap}>
        <div className={styles.btn}>编辑资料</div>
        <div className={styles.btn}>邀请成员</div>
      </div>
    </div>
  );
}
