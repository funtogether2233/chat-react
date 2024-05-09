import { toast } from 'react-toastify';
import { deletePostApi, deletePostMessageApi } from '../../../../api/post';
import Avatar from '../../../../components/Avatar';
import SimpleButton from '../../../../components/SimpleButton';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IPostItemInfo, IPostMessageInfo } from '../../../../types/post';
import { getFormatMessageTime } from '../../../../utils/time';
import styles from './PostItem.module.less';

export default function PostItem({
  postInfo,
  onClick,
  init,
  type = 'post'
}: {
  postInfo: IPostItemInfo | IPostMessageInfo | null;
  onClick?: () => void;
  init?: () => void;
  type?: 'post' | 'postMessage';
}) {
  const { userId } = useUserContext();
  const { navToMyInfo } = useNav();
  const content = postInfo?.content || '';
  const createdTime = postInfo?.createdTime || '0';
  const userInfo = postInfo?.userInfo || null;
  const curUserId = userInfo?.userId || '';
  const userName = userInfo?.userName || '';
  const avatarImg = userInfo?.avatarImg || '';

  const handleDeletePost = async () => {
    if (type === 'post') {
      try {
        const deletePostRes = await deletePostApi({
          postId: String(postInfo?.id)
        });
        toast.success('删除动态成功');
        navToMyInfo();
        console.log(deletePostRes);
      } catch (err) {
        toast.error(String(err));
        console.error('err', err);
      }
    } else {
      try {
        const deletePostMessageRes = await deletePostMessageApi({
          postMessageId: String(postInfo?.id)
        });
        toast.success('删除评论成功');
        init!();
        console.log(deletePostMessageRes);
      } catch (err) {
        toast.error(String(err));
        console.error('err', err);
      }
    }
  };

  return (
    <div className={styles.postItem} onClick={onClick}>
      <div className={styles.userInfo}>
        <Avatar img={avatarImg}></Avatar>
        <div className={styles.userName}>{userName}</div>
        <div className={styles.time}>{getFormatMessageTime(createdTime)}</div>
        {(type === 'post' && userId === curUserId) ||
        userId === curUserId ||
        userId === (postInfo as IPostMessageInfo)?.postUserId ? (
          <SimpleButton
            btnTxt={'删除'}
            onClick={handleDeletePost}
            width={40}
            margin={'20px'}
          ></SimpleButton>
        ) : null}
      </div>
      <div className={styles.postContent}>{content}</div>
    </div>
  );
}
