import Avatar from '../../../components/Avatar';
import ListItemWrap from '../../../components/ListItemWrap';
import { IDocItemInfo } from '../../../types/collaDoc';
import styles from './DocItem.module.less';

export default function DocItem({
  onClick,
  docInfo,
  paddingY,
  paddingX
}: {
  onClick?: () => void;
  docInfo: IDocItemInfo;
  paddingY?: number;
  paddingX?: number;
}) {
  return (
    <>
      <ListItemWrap onClick={onClick} paddingY={paddingY} paddingX={paddingX}>
        <div className={styles.docItem}>
          <Avatar img={docInfo.groupInfo.avatarImg}></Avatar>
          <div className={styles.infowrap}>
            <div className={styles.docName}>{docInfo.docName}</div>
            <div className={styles.groupName}>
              {docInfo.groupInfo.groupName}
            </div>
          </div>
        </div>
      </ListItemWrap>
    </>
  );
}
