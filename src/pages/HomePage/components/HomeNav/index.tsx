import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getUserInfoApi } from '../../../../api/relationship/user';
import Avatar from '../../../../components/Avatar';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IUserInfo } from '../../../../types/relationship';
import styles from './HomeNav.module.less';

const RELATION_IMG = 'src/assets/relation_img.png';
const DOC_IMG = 'src/assets/doc_img.png';
const POST_IMG = 'src/assets/post_img.png';
const EXIT_IMG = 'src/assets/exit_img.png';

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
        <img src={RELATION_IMG} />
        关系
      </div>
      {/* <div className={styles.navBtn} onClick={() => navToMessage()}>
        消息
      </div> */}
      <div className={styles.navBtn} onClick={() => navToDoc()}>
        <img src={DOC_IMG} />
        文档
      </div>
      <div className={styles.navBtn} onClick={() => navToPost()}>
        <img src={POST_IMG} />
        动态
      </div>
      <div className={styles.navBtn} onClick={exit}>
        <img src={EXIT_IMG} />
        退出
      </div>
    </div>
  );
}
