import Avatar from '../../../../components/Avatar';
import { IPostItemInfo } from '../../../../types/post';
import { getFormatMessageTime } from '../../../../utils/time';
import styles from './PostItem.module.less';

export default function PostItem({
  postInfo,
  onClick
}: {
  postInfo: IPostItemInfo | null;
  onClick?: () => void;
}) {
  const content = postInfo?.content || '';
  const createdTime = postInfo?.createdTime || '0';
  const userInfo = postInfo?.userInfo || null;
  const userName = userInfo?.userName || '';

  return (
    <div className={styles.postItem} onClick={onClick}>
      <div className={styles.userInfo}>
        <Avatar></Avatar>
        <div className={styles.userName}>{userName}</div>
        <div className={styles.time}>{getFormatMessageTime(createdTime)}</div>
      </div>
      <div className={styles.postContent}>{content}</div>
    </div>
  );
}
