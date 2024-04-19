import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { deleteFriendApi } from '../../../../api/relationship/friendship';
import { getUserInfoApi } from '../../../../api/relationship/user';
import Avatar from '../../../../components/Avatar';
import SimpleButton from '../../../../components/SimpleButton';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IUserInfo } from '../../../../types/relationship';
import styles from './FriendInfoPage.module.less';

export default function FriendInfoPage() {
  const { userId, curFriendId } = useUserContext();
  const { navToRelationship, navToPost } = useNav();
  const [friendInfo, setFriendInfo] = useState<IUserInfo>();

  const init = async () => {
    try {
      const userInfoRes = await getUserInfoApi({
        userId: curFriendId
      });
      setFriendInfo(userInfoRes);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  useEffect(() => {
    console.log('FriendInfoPage');
    init();
  }, [curFriendId]);

  const handleDeleteFriend = async () => {
    try {
      const addMemberRes = await deleteFriendApi({
        userId,
        friendId: curFriendId
      });
      toast.success('删除好友成功');
      navToRelationship();
      console.log(addMemberRes);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  return (
    <div className={styles.friendInfoPage}>
      <Avatar size={100}></Avatar>
      <div className={styles.userName}>{friendInfo?.userName}</div>
      <div className={styles.userId}>{friendInfo?.userId}</div>
      <div className={styles.userIntroduction}>
        {friendInfo?.userIntroduction}
      </div>
      <div className={styles.btnWrap}>
        <SimpleButton
          btnTxt={'查看动态'}
          onClick={() => {
            navToPost(curFriendId);
          }}
          width={80}
          margin="10px"
        ></SimpleButton>
        <SimpleButton
          btnTxt={'删除好友'}
          onClick={handleDeleteFriend}
          width={80}
          margin="10px"
        ></SimpleButton>
      </div>
    </div>
  );
}
