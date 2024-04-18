import { useEffect, useState } from 'react';
import {
  searchFriendshipListApi,
  searchGroupshipListApi
} from '../../../../api/relationship';
import SimpleButton from '../../../../components/SimpleButton';
import { IFriendshipInfo, IGroupInfo } from '../../../../types/relationship';
import FriendItem from '../../components/FriendItem';
import GroupItem from '../../components/GroupItem';
import styles from './AddRelationshipPage.module.less';

export enum addRelaStateEnum {
  friend = 'friend',
  group = 'group'
}

export default function AddRelationshipPage() {
  useEffect(() => {
    console.log('AddRelationshipPage');
  });

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
    if (addRelaState === addRelaStateEnum.friend) {
      try {
        const friendshipListRes = await searchFriendshipListApi({
          userId: inputContent
        });
        console.log(friendshipListRes);
        setFriendListInfo(friendshipListRes.friendshipList);
      } catch (err) {
        console.error('err', err);
      }
    }
    if (addRelaState === addRelaStateEnum.group) {
      try {
        const groupListRes = await searchGroupshipListApi({
          groupId: inputContent
        });
        console.log(groupListRes);
        setGroupListInfo(groupListRes.groupList);
      } catch (err) {
        console.error('err', err);
      }
    }
  };

  const handleAddFriend = () => {};
  const handleAddGroup = () => {};
  const AddFriendBtn = (
    <SimpleButton btnTxt={'加好友'} onClick={handleAddFriend}></SimpleButton>
  );
  const AddGroupBtn = (
    <SimpleButton btnTxt={'加群'} onClick={handleAddGroup}></SimpleButton>
  );
  const FriendList = friendListInfo.map((friendshipInfo) => {
    const { userId } = friendshipInfo;
    return (
      <FriendItem
        friendshipInfo={friendshipInfo}
        paddingX={100}
        btnNode={AddFriendBtn}
        key={userId}
      ></FriendItem>
    );
  });
  const GroupList = groupListInfo.map((groupInfo) => {
    const { groupId } = groupInfo;
    return (
      <GroupItem
        groupInfo={groupInfo}
        paddingX={100}
        btnNode={AddGroupBtn}
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
          加好友
        </div>
        <div
          className={styles.btn}
          onClick={() => selectAddRelationshipState(addRelaStateEnum.group)}
        >
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
      <div>{RelaList}</div>
    </div>
  );
}