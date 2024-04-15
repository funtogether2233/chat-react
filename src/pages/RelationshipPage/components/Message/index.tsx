import Avatar from '../../../../components/Avatar';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IMessageInfo } from '../../../../types/message';
import { getFormatMessageTime } from '../../../../utils/time';
import styles from './Message.module.less';

export default function Message({
  messageInfo
}: {
  messageInfo: IMessageInfo;
}) {
  const { fromId, msg, time } = messageInfo;

  const { userId } = useUserContext();

  return (
    <div className={styles.message}>
      <Avatar></Avatar>
      <div className={styles.msgContent}>
        <div className={styles.msgDetail}>
          <div className={styles.userId}>{fromId}</div>
          <div className={styles.time}>{getFormatMessageTime(time)}</div>
        </div>
        <div className={styles.bubbleWrap}>
          <div
            className={styles.bubbleContent}
            style={{
              backgroundColor: userId === fromId ? '#09f' : '#fff',
              color: userId === fromId ? '#fff' : '#000'
            }}
          >
            {msg}
          </div>
        </div>
      </div>
    </div>
  );
}
