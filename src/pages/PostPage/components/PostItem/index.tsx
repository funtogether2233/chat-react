import Avatar from '../../../../components/Avatar';
import { useNav } from '../../../../hooks/useNav';
import styles from './PostItem.module.less';

export default function PostItem() {
  const { navToPostDetail } = useNav();
  return (
    <div className={styles.postItem} onClick={() => navToPostDetail()}>
      <div className={styles.userInfo}>
        <Avatar></Avatar>
        <div className={styles.userName}>userName</div>
        <div className={styles.time}>时间</div>
      </div>
      <div className={styles.postContent}>123</div>
    </div>
  );
}
