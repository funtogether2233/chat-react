import { useEffect } from 'react';
import Avatar from '../../../../components/Avatar';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import styles from './MyInfoPage.module.less';

export default function MyInfoPage() {
  useEffect(() => {
    console.log('MyInfoPage');
  });

  const { userId } = useUserContext();
  const { navToPost } = useNav();

  return (
    <div className={styles.myInfoPage}>
      <Avatar size={100}></Avatar>
      <div className={styles.userName}>userName</div>
      <div className={styles.userId}>userId</div>
      <div className={styles.userIntroduction}>个性签名</div>
      <div className={styles.btnWrap}>
        <div
          className={styles.btn}
          onClick={() => {
            navToPost(userId);
          }}
        >
          动态
        </div>
        <div className={styles.btn}>编辑资料</div>
      </div>
    </div>
  );
}
