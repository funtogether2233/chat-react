import { useEffect } from 'react';
import Avatar from '../../../../components/Avatar';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import styles from './FriendInfoPage.module.less';

export default function FriendInfoPage() {
  useEffect(() => {
    console.log('FriendInfoPage');
  });

  const { curFriendId } = useUserContext();
  const { navToPost } = useNav();

  return (
    <div className={styles.friendInfoPage}>
      <Avatar size={100}></Avatar>
      <div className={styles.userName}>userName</div>
      <div className={styles.userId}>userId</div>
      <div className={styles.userIntroduction}>个性签名</div>
      <div className={styles.btnWrap}>
        <div
          className={styles.btn}
          onClick={() => {
            navToPost(curFriendId);
          }}
        >
          查看动态
        </div>
      </div>
    </div>
  );
}
