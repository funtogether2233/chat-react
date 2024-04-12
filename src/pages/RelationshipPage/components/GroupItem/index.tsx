import Avatar from '../../../../components/Avatar';
import ListItemWrap from '../../../../components/ListItemWrap';
import styles from './GroupItem.module.less';

export default function GroupItem({
  onClick,
  groupId
}: {
  onClick?: () => void;
  groupId: string;
}) {
  return (
    <ListItemWrap onClick={onClick}>
      <div className={styles.groupItem}>
        <Avatar></Avatar>
        <div className={styles.groupId}>{groupId}</div>
      </div>
    </ListItemWrap>
  );
}
