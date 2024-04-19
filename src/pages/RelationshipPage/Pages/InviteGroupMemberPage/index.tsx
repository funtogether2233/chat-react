import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addGroupMemberApi } from '../../../../api/relationship/group';
import { searchFriendshipListApi } from '../../../../api/relationship/user';
import SimpleButton from '../../../../components/SimpleButton';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IFriendshipInfo } from '../../../../types/relationship';
import FriendItem from '../../components/FriendItem';
import styles from './InviteGroupMemberPage.module.less';

export default function InviteGroupMemberPage() {
  useEffect(() => {
    console.log('InviteGroupMemberPage');
  });

  const { curGroupId } = useUserContext();
  const [inputContent, setInputContent] = useState('');
  const [friendListInfo, setFriendListInfo] = useState<IFriendshipInfo[]>([]);

  const handleSearch = async () => {
    if (inputContent === '') {
      const warnContent = '请输入内容！';
      console.warn(warnContent);
      toast.warn(warnContent);
      return;
    }
    try {
      const friendshipListRes = await searchFriendshipListApi({
        userId: inputContent,
        groupId: curGroupId
      });
      console.log(friendshipListRes);
      setFriendListInfo(friendshipListRes.friendshipList);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  const handleAddMember = async (userId: string, groupId: string) => {
    try {
      const addMemberRes = await addGroupMemberApi({
        userId,
        groupId
      });
      toast.success('添加群成员成功');
      console.log(addMemberRes);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };
  const AddMemberBtn = ({
    userId,
    groupId,
    isInGroup
  }: {
    userId: string;
    groupId: string;
    isInGroup: boolean;
  }) => (
    <SimpleButton
      btnTxt={isInGroup ? '已在群中' : '邀请进群'}
      onClick={() => (isInGroup ? null : handleAddMember(userId, groupId))}
      width={80}
    ></SimpleButton>
  );
  const FriendList = friendListInfo.map((friendshipInfo) => {
    const friendId = friendshipInfo.userId;
    const { isInGroup } = friendshipInfo;
    return (
      <FriendItem
        friendshipInfo={friendshipInfo}
        paddingX={100}
        btnNode={AddMemberBtn({
          userId: friendId,
          groupId: curGroupId,
          isInGroup: isInGroup || false
        })}
        key={friendId}
      ></FriendItem>
    );
  });

  return (
    <div className={styles.inviteGroupMemberPage}>
      <div className={styles.inputWrap}>
        <input
          className={styles.input}
          placeholder={'请输入成员id'}
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
      <div className={styles.relaList}>{FriendList}</div>
    </div>
  );
}
