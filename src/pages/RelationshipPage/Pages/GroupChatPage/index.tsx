import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import {
  getGroupInfoApi,
  getUserMuteApi
} from '../../../../api/relationship/group';
import { getGroupMessageApi } from '../../../../api/relationship/message';
import { socket } from '../../../../api/socket';
import SimpleButton from '../../../../components/SimpleButton';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IMessageInfo } from '../../../../types/chatMessage';
import { IGroupInfo } from '../../../../types/relationship';
import { isMuteMember } from '../../../../utils/userStatus';
import Message from '../../components/Message';
import styles from './GroupChatPage.module.less';

export default function GroupChatPage() {
  useEffect(() => {
    socket.on('group-message', (data) => {
      console.log('group-message', data);
      const { fromUserInfo, toId, msg, createdTime } = data;
      setMessageInfoList((cur) => [
        ...cur,
        { fromUserInfo, toId, msg, createdTime }
      ]);
    });
  }, []);

  const { userId, curGroupId } = useUserContext();
  const { navToGroupInfo } = useNav();
  const [groupInfo, setGroupInfo] = useState<IGroupInfo>();
  const [userIsMute, setUserIsMute] = useState(0);

  const init = async () => {
    try {
      const groupInfoRes = await getGroupInfoApi({
        groupId: curGroupId
      });
      setGroupInfo(groupInfoRes);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
    try {
      const getFriendMessageRes = await getGroupMessageApi({
        toId: curGroupId
      });
      setMessageInfoList(getFriendMessageRes.userMessageList);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
    try {
      const userMute = await getUserMuteApi({
        userId,
        groupId: curGroupId
      });
      setUserIsMute(userMute.isMute);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  useEffect(() => {
    socket.emit('join-group', { fromId: userId, toId: curGroupId });
    init();
  }, [curGroupId]);

  const [messageInfoList, setMessageInfoList] = useState<IMessageInfo[]>([]);

  const [subContent, setSubContent] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const submitContent = () => {
    console.log(subContent);
    const data = {
      fromId: userId,
      toId: curGroupId,
      msg: subContent
    };
    socket.emit('group-message', data);
    setSubContent('');
    textAreaRef.current!.value = '';
  };

  const MessageList = messageInfoList.map((messageInfo) => {
    const { fromUserInfo, toId, createdTime } = messageInfo;
    const fromId = fromUserInfo.userId;
    if (toId === curGroupId) {
      return (
        <Message messageInfo={messageInfo} key={fromId + createdTime}></Message>
      );
    }
    return null;
  });

  return (
    <div className={styles.groupChatRoom}>
      <div className={styles.groupInfoWrap} onClick={() => navToGroupInfo()}>
        <div className={styles.groupInfo}>{groupInfo?.groupName}</div>
      </div>
      <div className={styles.groupMsg}>{MessageList}</div>
      <div className={styles.inputWrap}>
        {!isMuteMember(userIsMute) ? (
          <>
            <textarea
              placeholder="请输入消息内容"
              className={styles.textArea}
              ref={textAreaRef}
              onChange={(e) => {
                setSubContent(e.target.value);
              }}
            ></textarea>
            <div className={styles.btnWrap}>
              <SimpleButton
                btnTxt={'发送'}
                onClick={submitContent}
                margin={'10px'}
              ></SimpleButton>
            </div>
          </>
        ) : (
          <div>您已被群管理员禁言，无法发送消息</div>
        )}
      </div>
    </div>
  );
}
