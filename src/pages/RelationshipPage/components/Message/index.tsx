import Avatar from '../../../../components/Avatar';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IMessageInfo } from '../../../../types/chatMessage';
import { getFormatMessageTime } from '../../../../utils/time';
import styles from './Message.module.less';

export default function Message({
  messageInfo
}: {
  messageInfo: IMessageInfo;
}) {
  const { userId } = useUserContext();
  const { fromUserInfo, msg, createdTime } = messageInfo;
  const { userName } = fromUserInfo;
  const fromId = fromUserInfo.userId;

  return (
    <div className={styles.message}>
      <Avatar></Avatar>
      <div className={styles.msgContent}>
        <div className={styles.msgDetail}>
          <div className={styles.userName}>{userName}</div>
          <div className={styles.time}>{getFormatMessageTime(createdTime)}</div>
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
