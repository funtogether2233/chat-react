import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  exitGroupApi,
  getGroupInfoApi
} from '../../../../../../api/relationship';
import Avatar from '../../../../../../components/Avatar';
import SimpleButton from '../../../../../../components/SimpleButton';
import { useNav } from '../../../../../../hooks/useNav';
import { useUserContext } from '../../../../../../hooks/useUserContext';
import {
  IGroupInfo,
  userStatusEnum
} from '../../../../../../types/relationship';
import {
  isGroupMember,
  isGroupOwner
} from '../../../../../../utils/userStatus';
import styles from './GroupInfoDetail.module.less';

export default function GroupInfoDetail({
  userStatus
}: {
  userStatus: userStatusEnum;
}) {
  useEffect(() => {
    init();
  }, []);

  const { userId, curGroupId } = useUserContext();
  const { navToHome, navToSubmitGroupInfo, navToInviteGroupMember } = useNav();
  const [groupInfo, setGroupInfo] = useState<IGroupInfo>();

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
  };

  const handleExitGroup = async () => {
    try {
      const exitGroupRes = await exitGroupApi({
        userId,
        groupId: curGroupId
      });
      toast.success('已退出群聊');
      navToHome();
      console.log(exitGroupRes);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  return (
    <div className={styles.groupInfoDetail}>
      <Avatar size={100}></Avatar>
      <div className={styles.userName}>{groupInfo?.groupName}</div>
      <div className={styles.userId}>{groupInfo?.groupId}</div>
      <div className={styles.userIntroduction}>
        {groupInfo?.groupIntroduction}
      </div>
      <div className={styles.btnWrap}>
        <SimpleButton
          display={!isGroupMember(userStatus)}
          btnTxt={'编辑资料'}
          onClick={navToSubmitGroupInfo}
          width={100}
          margin="10px"
        ></SimpleButton>
        <SimpleButton
          btnTxt={'邀请成员'}
          onClick={navToInviteGroupMember}
          width={100}
          margin="10px"
        ></SimpleButton>
        <SimpleButton
          display={!isGroupOwner(userStatus)}
          btnTxt={'退出群聊'}
          onClick={handleExitGroup}
          width={100}
          margin="10px"
        ></SimpleButton>
      </div>
    </div>
  );
}
