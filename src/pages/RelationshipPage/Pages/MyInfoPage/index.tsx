import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getUserInfoApi } from '../../../../api/relationship/user';
import Avatar from '../../../../components/Avatar';
import SimpleButton from '../../../../components/SimpleButton';
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
        <SimpleButton
          btnTxt={'查看动态'}
          onClick={() => {
            navToPost(userId);
          }}
          width={80}
          margin="10px"
        ></SimpleButton>
        <SimpleButton
          btnTxt={'编辑资料'}
          onClick={navToSubmitMyInfo}
          width={80}
          margin="10px"
        ></SimpleButton>
      </div>
    </div>
  );
}
