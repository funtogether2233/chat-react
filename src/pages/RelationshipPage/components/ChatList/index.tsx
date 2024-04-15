import { useEffect, useState } from 'react';
import { relaStateEnum } from '../..';
import {
  getFriendshipListApi,
  getGroupListApi
} from '../../../../api/chatList';
import ListWrap from '../../../../components/ListWrap';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IFriendshipInfo, IGroupInfo } from '../../../../types/chatList';
import FriendItem from '../FriendItem';
import GroupItem from '../GroupItem';
import styles from './ChatList.module.less';

export default function ChatList({
  relaState,
  setRelaState
}: {
  relaState: relaStateEnum;
  setRelaState: React.Dispatch<React.SetStateAction<relaStateEnum>>;
}) {
  useEffect(() => {
    getFriendshipList(userId);
  }, []);

  const { userId } = useUserContext();
  const { navToFriendChat, navToGroupChat } = useNav();

  const [friendshipListInfo, setFriendshipListInfo] = useState<
    IFriendshipInfo[]
  >([]);
  const getFriendshipList = async (userId: string) => {
    try {
      const friendshipListRes = await getFriendshipListApi({ userId });
      setFriendshipListInfo(friendshipListRes.friendshipList);
    } catch (err) {
      console.error('err', err);
    }
  };
  const FriendshipList = friendshipListInfo.map((friendshipInfo) => {
    const { friendId } = friendshipInfo;
    return (
      <FriendItem
        onClick={() => navToFriendChat(friendId)}
        friendId={friendId}
        key={friendId}
      ></FriendItem>
    );
  });
  const selectFriendState = () => {
    if (relaState === relaStateEnum.friend) {
      return;
    }
    setRelaState(relaStateEnum.friend);
    getFriendshipList(userId);
  };

  const [groupListInfo, setGroupListInfo] = useState<IGroupInfo[]>([]);
  const getGroupList = async (userId: string) => {
    try {
      const groupListRes = await getGroupListApi({ userId });
      setGroupListInfo(groupListRes.groupList);
    } catch (err) {
      console.error('err', err);
    }
  };
  const GroupList = groupListInfo.map((groupInfo) => {
    const { groupId } = groupInfo;
    return (
      <GroupItem
        onClick={() => navToGroupChat(groupId)}
        groupId={groupId}
        key={groupId}
      ></GroupItem>
    );
  });
  const selectGroupState = () => {
    if (relaState === relaStateEnum.group) {
      return;
    }
    setRelaState(relaStateEnum.group);
    getGroupList(userId);
  };

  const ChatList =
    relaState === relaStateEnum.friend
      ? FriendshipList
      : relaState === relaStateEnum.group
      ? GroupList
      : null;

  return (
    <ListWrap>
      <div className={styles.addRelaBar}>
        <div className={styles.addRelaBtn}>加好友/群</div>
        <div className={styles.addRelaBtn}>发起群聊</div>
      </div>
      <div className={styles.relaBtnBar}>
        <div className={styles.relaBtn} onClick={selectFriendState}>
          好友
        </div>
        <div className={styles.relaBtn} onClick={selectGroupState}>
          群组
        </div>
      </div>
      <div className={styles.relaContent}>{ChatList}</div>
    </ListWrap>
  );
}
