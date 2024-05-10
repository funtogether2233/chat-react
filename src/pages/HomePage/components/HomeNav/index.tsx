import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getUserInfoApi } from '../../../../api/relationship/user';
import Avatar from '../../../../components/Avatar';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IUserInfo } from '../../../../types/relationship';
import styles from './HomeNav.module.less';

export default function ChatNav() {
  useEffect(() => {
    init();
  }, []);

  const { userId, initUserContext } = useUserContext();
  const { navToRelationship, navToMyInfo, navToDoc, navToPost } = useNav();
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

  const exit = () => {
    initUserContext();
    toast.success('成功退出');
  };

  return (
    <div className={styles.homeNav}>
      <Avatar onClick={() => navToMyInfo()} img={userInfo?.avatarImg}></Avatar>
      <div className={styles.navBtn} onClick={() => navToRelationship()}>
        关系
      </div>
      {/* <div className={styles.navBtn} onClick={() => navToMessage()}>
        消息
      </div> */}
      <div className={styles.navBtn} onClick={() => navToDoc()}>
        文档
      </div>
      <div className={styles.navBtn} onClick={() => navToPost()}>
        动态
      </div>
      <div className={styles.navBtn} onClick={exit}>
        退出
      </div>
    </div>
  );
}
