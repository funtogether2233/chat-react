import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getUserInfoApi } from '../../../../api/relationship';
import Avatar from '../../../../components/Avatar';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IUserInfo } from '../../../../types/relationship';
import styles from './MyInfoPage.module.less';

export default function MyInfoPage() {
  useEffect(() => {
    init();
    console.log('MyInfoPage');
  }, []);

  const { userId } = useUserContext();
  const { navToSubmitMyInfo } = useNav();
  const { navToPost } = useNav();
  const [userInfo, setUserInfo] = useState<IUserInfo>();

  const init = async () => {
    try {
      const userInfoRes = await getUserInfoApi({
        userId
      });
      setUserInfo(userInfoRes);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  return (
    <div className={styles.myInfoPage}>
      <Avatar size={100}></Avatar>
      <div className={styles.userName}>{userInfo?.userName}</div>
      <div className={styles.userId}>{userInfo?.userId}</div>
      <div className={styles.userIntroduction}>
        {userInfo?.userIntroduction}
      </div>
      <div className={styles.btnWrap}>
        <div
          className={styles.btn}
          onClick={() => {
            navToPost(userId);
          }}
        >
          动态
        </div>
        <div className={styles.btn} onClick={navToSubmitMyInfo}>
          编辑资料
        </div>
      </div>
    </div>
  );
}
