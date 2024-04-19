import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getUserStatusApi } from '../../../../api/relationship/user';
import { useUserContext } from '../../../../hooks/useUserContext';
import { userStatusEnum } from '../../../../types/relationship';
import styles from './GroupInfoPage.module.less';
import GroupInfoDetail from './components/GroupInfoDetail';
import GroupMemberList from './components/GroupMemberList';

export default function GroupInfoPage() {
  useEffect(() => {
    init();
    console.log('GroupInfoPage');
  }, []);

  const { userId, curGroupId } = useUserContext();
  const [userStatus, setUserStatus] = useState<userStatusEnum>(
    userStatusEnum.member
  );

  const init = async () => {
    try {
      const userStatusRes = await getUserStatusApi({
        userId,
        groupId: curGroupId
      });
      setUserStatus(userStatusRes.userStatus);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  return (
    <div className={styles.groupInfoPage}>
      <GroupInfoDetail userStatus={userStatus}></GroupInfoDetail>
      <GroupMemberList userStatus={userStatus}></GroupMemberList>
    </div>
  );
}
