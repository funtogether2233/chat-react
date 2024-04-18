import Avatar from '../../../../components/Avatar';
import ListItemWrap from '../../../../components/ListItemWrap';
import { IFriendshipInfo } from '../../../../types/relationship';
import styles from './FriendItem.module.less';

export default function FriendItem({
  onClick,
  friendshipInfo,
  userStatusNode,
  btnNode,
  paddingY,
  paddingX
}: {
  onClick?: () => void;
  friendshipInfo: IFriendshipInfo;
  userStatusNode?: React.ReactNode;
  btnNode?: React.ReactNode;
  paddingY?: number;
  paddingX?: number;
}) {
  return (
    <ListItemWrap onClick={onClick} paddingY={paddingY} paddingX={paddingX}>
      <div className={styles.friendItem}>
        <div className={styles.friendInfo}>
          <Avatar></Avatar>
          <div className={styles.userName}>{friendshipInfo.userName}</div>
          <div className={styles.userStatus}>{userStatusNode}</div>
        </div>
        <div className={styles.btnWrap}>{btnNode}</div>
      </div>
    </ListItemWrap>
  );
}
