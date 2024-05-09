import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  allowPostPermissionApi,
  banPostPermissionApi,
  deleteFriendApi,
  getFriendPostPermissionApi,
  getUserPostPermissionApi
} from '../../../../api/relationship/friendship';
import { getUserInfoApi } from '../../../../api/relationship/user';
import Avatar from '../../../../components/Avatar';
import SimpleButton from '../../../../components/SimpleButton';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IUserInfo } from '../../../../types/relationship';
import { hasPostPermission } from '../../../../utils/userStatus';
import styles from './FriendInfoPage.module.less';

export default function FriendInfoPage() {
  const { userId, curFriendId } = useUserContext();
  const { navToRelationship, navToPost } = useNav();
  const [friendInfo, setFriendInfo] = useState<IUserInfo>();
  const [userPostPermission, setUserPostPermission] = useState(1);
  const [friendPostPermission, setFriendPostPermission] = useState(1);

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
    try {
      const userPostPermissionRes = await getUserPostPermissionApi({
        userId,
        friendId: curFriendId
      });
      setUserPostPermission(userPostPermissionRes.postPermission);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
    try {
      const friendPostPermissionRes = await getFriendPostPermissionApi({
        userId,
        friendId: curFriendId
      });
      setFriendPostPermission(friendPostPermissionRes.postPermission);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  useEffect(() => {
    console.log('FriendInfoPage');
    init();
  }, [curFriendId]);

  const handlePostPermission = async () => {
    if (hasPostPermission(userPostPermission)) {
      try {
        const banPostPermissionRes = await banPostPermissionApi({
          userId,
          friendId: curFriendId
        });
        toast.success('屏蔽动态成功');
        init();
        console.log(banPostPermissionRes);
      } catch (err) {
        toast.error(String(err));
        console.error('err', err);
      }
    } else {
      try {
        const allowPostPermissionRes = await allowPostPermissionApi({
          userId,
          friendId: curFriendId
        });
        toast.success('开放动态成功');
        init();
        console.log(allowPostPermissionRes);
      } catch (err) {
        toast.error(String(err));
        console.error('err', err);
      }
    }
  };

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
      <Avatar size={100} img={friendInfo?.avatarImg}></Avatar>
      <div className={styles.userName}>{friendInfo?.userName}</div>
      <div className={styles.userId}>{friendInfo?.userId}</div>
      <div className={styles.userIntroduction}>
        {friendInfo?.userIntroduction}
      </div>
      <div className={styles.btnWrap}>
        {hasPostPermission(friendPostPermission) ? (
          <SimpleButton
            btnTxt={'查看动态'}
            onClick={() => {
              navToPost(curFriendId);
            }}
            width={80}
            margin="10px"
          ></SimpleButton>
        ) : null}
        <SimpleButton
          btnTxt={
            hasPostPermission(userPostPermission) ? '屏蔽动态' : '开放动态'
          }
          onClick={handlePostPermission}
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
