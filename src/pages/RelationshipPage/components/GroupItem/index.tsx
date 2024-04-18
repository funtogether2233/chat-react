import Avatar from '../../../../components/Avatar';
import ListItemWrap from '../../../../components/ListItemWrap';
import { IGroupInfo } from '../../../../types/relationship';
import styles from './GroupItem.module.less';

export default function GroupItem({
  onClick,
  groupInfo,
  btnNode,
  paddingY,
  paddingX
}: {
  onClick?: () => void;
  groupInfo: IGroupInfo;
  btnNode?: React.ReactNode;
  paddingY?: number;
  paddingX?: number;
}) {
  return (
    <ListItemWrap onClick={onClick} paddingY={paddingY} paddingX={paddingX}>
      <div className={styles.groupItem}>
        <div className={styles.groupInfo}>
          <Avatar></Avatar>
          <div className={styles.groupId}>{groupInfo.groupId}</div>
        </div>
        <div className={styles.btnWrap}>{btnNode}</div>
      </div>
    </ListItemWrap>
  );
}
