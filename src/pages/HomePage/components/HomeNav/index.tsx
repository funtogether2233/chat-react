import Avatar from '../../../../components/Avatar';
import { useNav } from '../../../../hooks/useNav';
import styles from './HomeNav.module.less';

export default function ChatNav() {
  const { navToRelationship, navToMyInfo, navToMessage, navToDoc, navToPost } =
    useNav();

  return (
    <div className={styles.homeNav}>
      <Avatar onClick={() => navToMyInfo()}></Avatar>
      <div className={styles.navBtn} onClick={() => navToRelationship()}>
        关系
      </div>
      <div className={styles.navBtn} onClick={() => navToMessage()}>
        消息
      </div>
      <div className={styles.navBtn} onClick={() => navToDoc()}>
        文档
      </div>
      <div className={styles.navBtn} onClick={() => navToPost()}>
        动态
      </div>
    </div>
  );
}
