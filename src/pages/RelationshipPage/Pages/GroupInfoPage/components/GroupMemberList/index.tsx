import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  addAdminApi,
  addMuteApi,
  changeOwnerApi,
  deleteAdminApi,
  deleteMuteApi,
  exitGroupApi,
  getGroupMemberListApi
} from '../../../../../../api/relationship/group';
import SimpleButton from '../../../../../../components/SimpleButton';
import { useNav } from '../../../../../../hooks/useNav';
import { useUserContext } from '../../../../../../hooks/useUserContext';
import {
  IUserInfo,
  userStatusEnum
} from '../../../../../../types/relationship';
import {
  isGroupAdmin,
  isGroupMember,
  isGroupOwner,
  isMuteMember
} from '../../../../../../utils/userStatus';
import FriendItem from '../../../../components/FriendItem';
import styles from './GroupMemberList.module.less';

export default function GroupMemberList({
  userStatus
}: {
  userStatus: userStatusEnum;
}) {
  const { userId, curGroupId } = useUserContext();
  const { navToGroupChat } = useNav();
  const [newGroupMemberList, setNewGroupMemberList] = useState<IUserInfo[]>([]);

  useEffect(() => {
    init();
  }, [curGroupId]);

  const init = async () => {
    try {
      const groupMemberListRes = await getGroupMemberListApi({
        groupId: curGroupId
      });
      console.log(groupMemberListRes);
      setNewGroupMemberList(groupMemberListRes.groupMemberList);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  const UserStatus = ({ memberStatus }: { memberStatus: userStatusEnum }) => {
    return (
      <>
        {isGroupMember(memberStatus) ? null : (
          <div
            className={styles.userStatus}
            style={{
              backgroundColor: isGroupOwner(memberStatus)
                ? '#ff8d40'
                : '#0099ff'
            }}
          >
            {isGroupOwner(memberStatus) ? '群主' : '管理员'}
          </div>
        )}
      </>
    );
  };
  const GroupMemberBtn = ({
    memberId,
    memberStatus,
    isMute
  }: {
    memberId: string;
    memberStatus: userStatusEnum;
    isMute: number;
  }) => {
    const handleAdmin = async () => {
      if (isGroupAdmin(memberStatus)) {
        try {
          const addAdminRes = await deleteAdminApi({
            userId: memberId,
            groupId: curGroupId
          });
          toast.success('已取消管理员');
          init();
          console.log(addAdminRes);
        } catch (err) {
          toast.error(String(err));
          console.error('err', err);
        }
      } else {
        try {
          const addAdminRes = await addAdminApi({
            userId: memberId,
            groupId: curGroupId
          });
          toast.success('已设为管理员');
          init();
          console.log(addAdminRes);
        } catch (err) {
          toast.error(String(err));
          console.error('err', err);
        }
      }
    };
    const handleOwner = async () => {
      try {
        const changeOwnerRes = await changeOwnerApi({
          userId,
          memberId,
          groupId: curGroupId
        });
        toast.success('已转让群主');
        navToGroupChat(curGroupId);
        console.log(changeOwnerRes);
      } catch (err) {
        toast.error(String(err));
        console.error('err', err);
      }
    };
    const handleMute = async () => {
      if (isMuteMember(isMute)) {
        try {
          const addAdminRes = await deleteMuteApi({
            userId: memberId,
            groupId: curGroupId
          });
          toast.success('已解除禁言');
          init();
          console.log(addAdminRes);
        } catch (err) {
          toast.error(String(err));
          console.error('err', err);
        }
      } else {
        try {
          const addAdminRes = await addMuteApi({
            userId: memberId,
            groupId: curGroupId
          });
          toast.success('已禁言');
          init();
          console.log(addAdminRes);
        } catch (err) {
          toast.error(String(err));
          console.error('err', err);
        }
      }
    };
    const handleExitGroup = async () => {
      try {
        const exitGroupRes = await exitGroupApi({
          userId: memberId,
          groupId: curGroupId
        });
        toast.success('已踢出群聊');
        init();
        console.log(exitGroupRes);
      } catch (err) {
        toast.error(String(err));
        console.error('err', err);
      }
    };

    return (
      <>
        <SimpleButton
          display={
            userId !== memberId &&
            isGroupOwner(userStatus) &&
            isGroupAdmin(memberStatus)
          }
          btnTxt={'转让群主'}
          onClick={handleOwner}
          width={80}
          margin="10px"
        ></SimpleButton>
        <SimpleButton
          display={userId !== memberId && isGroupOwner(userStatus)}
          btnTxt={isGroupAdmin(memberStatus) ? '取消管理员' : '设为管理员'}
          onClick={handleAdmin}
          width={100}
          margin="10px"
        ></SimpleButton>
        <SimpleButton
          display={
            userId !== memberId &&
            isGroupMember(memberStatus) &&
            !isGroupMember(userStatus)
          }
          btnTxt={isMuteMember(isMute) ? '解除禁言' : '禁言'}
          onClick={handleMute}
          width={isMuteMember(isMute) ? 80 : 40}
          margin="10px"
        ></SimpleButton>
        <SimpleButton
          display={
            userId !== memberId &&
            isGroupMember(memberStatus) &&
            !isGroupMember(userStatus)
          }
          btnTxt={'踢出群聊'}
          onClick={handleExitGroup}
          width={80}
          margin="10px"
        ></SimpleButton>
      </>
    );
  };
  const GroupMemberList = newGroupMemberList.map((groupMemberInfo) => {
    const memberStatus = groupMemberInfo?.userStatus || userStatusEnum.member;
    const isMute = groupMemberInfo?.isMute || 0;
    return (
      <FriendItem
        friendshipInfo={groupMemberInfo}
        userStatusNode={UserStatus({
          memberStatus
        })}
        btnNode={GroupMemberBtn({
          memberId: groupMemberInfo.userId,
          memberStatus,
          isMute
        })}
        key={groupMemberInfo.userId}
      ></FriendItem>
    );
  });

  return <div className={styles.groupMemberList}>{GroupMemberList}</div>;
}
