import { toast } from 'react-toastify';
import Avatar from '../../../../components/Avatar';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import styles from './HomeNav.module.less';

export default function ChatNav() {
  const { initUserContext } = useUserContext();
  const { navToRelationship, navToMyInfo, navToDoc, navToPost } = useNav();

  const exit = () => {
    initUserContext();
    toast.success('成功退出');
  };

  return (
    <div className={styles.homeNav}>
      <Avatar onClick={() => navToMyInfo()}></Avatar>
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
      <div
        className={styles.navBtn}
        onClick={() => {
          exit();
        }}
      >
        退出
      </div>
    </div>
  );
}
