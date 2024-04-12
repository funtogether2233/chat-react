import Avatar from '../../../../components/Avatar';
import ListItemWrap from '../../../../components/ListItemWrap';
import styles from './FriendItem.module.less';

export default function FriendItem({
  onClick,
  friendId
}: {
  onClick?: () => void;
  friendId: string;
}) {
  return (
    <ListItemWrap onClick={onClick}>
      <div className={styles.friendItem}>
        <Avatar></Avatar>
        <div className={styles.friendId}>{friendId}</div>
      </div>
    </ListItemWrap>
  );
}
