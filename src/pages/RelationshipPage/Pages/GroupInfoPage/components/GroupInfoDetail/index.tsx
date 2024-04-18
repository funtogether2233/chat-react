import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getGroupInfoApi } from '../../../../../../api/relationship';
import Avatar from '../../../../../../components/Avatar';
import { useNav } from '../../../../../../hooks/useNav';
import { useUserContext } from '../../../../../../hooks/useUserContext';
import { IGroupInfo } from '../../../../../../types/relationship';
import styles from './GroupInfoDetail.module.less';

export default function GroupInfoDetail() {
  useEffect(() => {
    init();
  }, []);

  const { navToSubmitGroupInfo } = useNav();

  const { curGroupId } = useUserContext();
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

  return (
    <div className={styles.groupInfoDetail}>
      <Avatar size={100}></Avatar>
      <div className={styles.userName}>{groupInfo?.groupName}</div>
      <div className={styles.userId}>{groupInfo?.groupId}</div>
      <div className={styles.userIntroduction}>
        {groupInfo?.groupIntroduction}
      </div>
      <div className={styles.btnWrap}>
        <div className={styles.btn} onClick={navToSubmitGroupInfo}>
          编辑资料
        </div>
        <div className={styles.btn}>邀请成员</div>
      </div>
    </div>
  );
}
