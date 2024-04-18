import { useEffect, useRef, useState } from 'react';
import { socket } from '../../../../api/socket';
import SimpleButton from '../../../../components/SimpleButton';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IMessageInfo } from '../../../../types/chatMessage';
import Message from '../../components/Message';
import styles from './GroupChatPage.module.less';

export default function GroupChatPage() {
  useEffect(() => {
    socket.on('group-message', (data) => {
      console.log('group-message', data);
      const { fromId, toId, msg, time } = data;
      setMessageInfoList((cur) => [...cur, { fromId, toId, msg, time }]);
    });
  }, []);

  const { userId, curGroupId } = useUserContext();
  const { navToGroupInfo } = useNav();

  useEffect(() => {
    socket.emit('join-group', { fromId: userId, toId: curGroupId });
    setMessageInfoList([]);
  }, [curGroupId]);

  const [messageInfoList, setMessageInfoList] = useState<IMessageInfo[]>([]);

  const [subContent, setSubContent] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const submitContent = () => {
    console.log(subContent);
    const data = {
      fromId: userId,
      toId: curGroupId,
      msg: subContent,
      time: new Date().getTime()
    };
    socket.emit('group-message', data);
    setSubContent('');
    textAreaRef.current!.value = '';
  };

  const MessageList = messageInfoList.map((messageInfo) => {
    const { fromId, toId, time } = messageInfo;
    if (toId === curGroupId) {
      return <Message messageInfo={messageInfo} key={fromId + time}></Message>;
    }
    return null;
  });

  return (
    <div className={styles.groupChatRoom}>
      <div className={styles.groupInfoWrap}>
        <div className={styles.groupInfo} onClick={() => navToGroupInfo()}>
          {curGroupId}
        </div>
      </div>
      <div className={styles.groupMsg}>{MessageList}</div>
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
