import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addFriendshipApi } from '../../../../api/relationship/friendship';
import {
  addGroupApi,
  searchGroupshipListApi
} from '../../../../api/relationship/group';
import { searchFriendshipListApi } from '../../../../api/relationship/user';
import SimpleButton from '../../../../components/SimpleButton';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IFriendshipInfo, IGroupInfo } from '../../../../types/relationship';
import FriendItem from '../../components/FriendItem';
import GroupItem from '../../components/GroupItem';
import styles from './AddRelationshipPage.module.less';

const ADD_FRIEND_IMG = 'src/assets/add_friend_img.png';
const ADD_GROUP_IMG = 'src/assets/add_Group_img.png';

export enum addRelaStateEnum {
  friend = 'friend',
  group = 'group'
}

export default function AddRelationshipPage() {
  useEffect(() => {
    console.log('AddRelationshipPage');
  });

  const { userId } = useUserContext();
  const [addRelaState, setAddRelaState] = useState(addRelaStateEnum.friend);
  const [inputContent, setInputContent] = useState('');
  const [friendListInfo, setFriendListInfo] = useState<IFriendshipInfo[]>([]);
  const [groupListInfo, setGroupListInfo] = useState<IGroupInfo[]>([]);

  const selectAddRelationshipState = (newAddRelaState: addRelaStateEnum) => {
    if (newAddRelaState === addRelaState) {
      return;
    }
    setAddRelaState(newAddRelaState);
    if (newAddRelaState === addRelaStateEnum.friend) {
      setFriendListInfo([]);
    }
    if (newAddRelaState === addRelaStateEnum.group) {
      setGroupListInfo([]);
    }
  };

  const handleSearch = async () => {
    if (inputContent === '') {
      const warnContent = '请输入内容！';
      console.warn(warnContent);
      toast.warn(warnContent);
      return;
    }
    if (addRelaState === addRelaStateEnum.friend) {
      try {
        const friendshipListRes = await searchFriendshipListApi({
          userId: inputContent,
          friendId: userId
        });
        console.log(friendshipListRes);
        setFriendListInfo(friendshipListRes.friendshipList);
      } catch (err) {
        toast.error(String(err));
        console.error('err', err);
      }
    }
    if (addRelaState === addRelaStateEnum.group) {
      try {
        const groupListRes = await searchGroupshipListApi({
          groupId: inputContent,
          userId
        });
        console.log(groupListRes);
        setGroupListInfo(groupListRes.groupList);
      } catch (err) {
        toast.error(String(err));
        console.error('err', err);
      }
    }
  };

  const handleAddFriend = async (userId: string, friendId: string) => {
    try {
      const addFriendshipRes = await addFriendshipApi({
        userId,
        friendId
      });
      toast.success('添加好友成功');
      handleSearch();
      console.log(addFriendshipRes);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };
  const handleAddGroup = async (userId: string, groupId: string) => {
    try {
      const addGroupRes = await addGroupApi({
        userId,
        groupId
      });
      toast.success('添加群聊成功');
      handleSearch();
      console.log(addGroupRes);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };
  const AddFriendBtn = ({
    userId,
    friendId,
    isFriendship
  }: {
    userId: string;
    friendId: string;
    isFriendship: boolean;
  }) => (
    <>
      {userId === friendId ? null : (
        <SimpleButton
          btnTxt={isFriendship ? '已加好友' : '加好友'}
          onClick={() =>
            isFriendship ? null : handleAddFriend(userId, friendId)
          }
          width={80}
        ></SimpleButton>
      )}
    </>
  );
  const AddGroupBtn = ({
    userId,
    groupId,
    isInGroup
  }: {
    userId: string;
    groupId: string;
    isInGroup: boolean;
  }) => (
    <SimpleButton
      btnTxt={isInGroup ? '已加群' : '加群'}
      onClick={() => (isInGroup ? null : handleAddGroup(userId, groupId))}
      width={80}
    ></SimpleButton>
  );
  const FriendList = friendListInfo.map((friendshipInfo) => {
    const friendId = friendshipInfo.userId;
    const { isFriendship } = friendshipInfo;
    return (
      <FriendItem
        friendshipInfo={friendshipInfo}
        paddingX={100}
        btnNode={AddFriendBtn({
          userId,
          friendId,
          isFriendship: isFriendship || false
        })}
        key={friendId}
      ></FriendItem>
    );
  });
  const GroupList = groupListInfo.map((groupInfo) => {
    const { groupId, isInGroup } = groupInfo;
    return (
      <GroupItem
        groupInfo={groupInfo}
        paddingX={100}
        btnNode={AddGroupBtn({
          userId,
          groupId,
          isInGroup: isInGroup || false
        })}
        key={groupId}
      ></GroupItem>
    );
  });
  const RelaList =
    addRelaState === addRelaStateEnum.friend
      ? FriendList
      : addRelaState === addRelaStateEnum.group
      ? GroupList
      : null;

  return (
    <div className={styles.addRelationshipPage}>
      <div className={styles.btnWrap}>
        <div
          className={styles.btn}
          onClick={() => selectAddRelationshipState(addRelaStateEnum.friend)}
        >
          <img src={ADD_FRIEND_IMG} />
          加好友
        </div>
        <div
          className={styles.btn}
          onClick={() => selectAddRelationshipState(addRelaStateEnum.group)}
        >
          <img src={ADD_GROUP_IMG} />
          加群
        </div>
      </div>
      <div className={styles.inputWrap}>
        <input
          className={styles.input}
          placeholder={
            addRelaState === addRelaStateEnum.friend
              ? '请输入好友id'
              : addRelaState === addRelaStateEnum.group
              ? '请输入群id'
              : ''
          }
          onChange={(e) => {
            setInputContent(e.target.value);
          }}
        />
        <SimpleButton
          btnTxt={'搜索'}
          onClick={() => handleSearch()}
          margin={'20px'}
        ></SimpleButton>
      </div>
      <div className={styles.relaList}>{RelaList}</div>
    </div>
  );
}
