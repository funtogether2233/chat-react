import { useEffect } from 'react';
import Avatar from '../../../../components/Avatar';
import styles from './GroupInfoPage.module.less';

export default function GroupInfoPage() {
  useEffect(() => {
    console.log('GroupInfoPage');
  });

  return (
    <div className={styles.groupInfoPage}>
      <Avatar size={100}></Avatar>
      <div className={styles.userName}>userName</div>
      <div className={styles.userId}>userId</div>
      <div className={styles.userIntroduction}>个性签名</div>
      <div className={styles.btnWrap}>
        <div className={styles.btn}>成员管理</div>
        <div className={styles.btn}>编辑资料</div>
      </div>
    </div>
  );
}
