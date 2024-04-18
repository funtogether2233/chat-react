import { useEffect, useRef, useState } from 'react';
import { socket } from '../../../../api/socket';
import SimpleButton from '../../../../components/SimpleButton';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IMessageInfo } from '../../../../types/chatMessage';
import Message from '../../components/Message';
import styles from './FriendChatPage.module.less';

export default function FriendChatPage() {
  useEffect(() => {
    socket.on('user-message', (data) => {
      console.log('user-message', data);
      const { fromId, toId, msg, time } = data;
      setMessageInfoList((cur) => [...cur, { fromId, toId, msg, time }]);
    });
  }, []);

  const { userId, curFriendId } = useUserContext();
  const { navToFriendInfo } = useNav();

  useEffect(() => {
    setMessageInfoList([]);
  }, [curFriendId]);

  const [messageInfoList, setMessageInfoList] = useState<IMessageInfo[]>([]);

  const [subContent, setSubContent] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const submitContent = () => {
    console.log(subContent);
    const data = {
      fromId: userId,
      toId: curFriendId,
      msg: subContent,
      time: new Date().getTime()
    };
    socket.emit('user-message', data);
    setSubContent('');

    textAreaRef.current!.value = '';
  };

  const MessageList = messageInfoList.map((messageInfo) => {
    const { fromId, toId, time } = messageInfo;
    if (
      (fromId === userId && toId === curFriendId) ||
      (fromId === curFriendId && toId === userId)
    ) {
      return <Message messageInfo={messageInfo} key={fromId + time}></Message>;
    }
    return null;
  });

  return (
    <div className={styles.friendChatRoom}>
      <div className={styles.friendInfoWrap}>
        <div className={styles.friendInfo} onClick={() => navToFriendInfo()}>
          {curFriendId}
        </div>
      </div>
      <div className={styles.friendMsg}>{MessageList}</div>
      <div className={styles.inputWrap}>
        <textarea
          placeholder="请输入消息内容"
          className={styles.textArea}
          ref={textAreaRef}
          onChange={(e) => {
            setSubContent(e.target.value);
          }}
        ></textarea>
        <SimpleButton
          btnTxt={'发送'}
          onClick={submitContent}
          margin={'10px'}
        ></SimpleButton>
      </div>
    </div>
  );
}
