import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { addPostMessageApi, getPostDetailApi } from '../../../../api/post';
import SimpleButton from '../../../../components/SimpleButton';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IPostDetail } from '../../../../types/post';
import PostItem from '../../components/PostItem';
import styles from './PostDetailPage.module.less';

export default function PostDetailPage() {
  const { userId, curPostId } = useUserContext();
  const [postDetail, setPostDetail] = useState<IPostDetail | null>(null);
  const postInfo = postDetail?.postInfo || null;
  const postMessageList = postDetail?.postMessageList || [];

  useEffect(() => {
    init();
    console.log('PostDetailPage');
  }, [curPostId]);

  const init = async () => {
    try {
      const postDetailRes = await getPostDetailApi({
        postId: curPostId
      });
      setPostDetail(postDetailRes.postDetail);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
    return;
  };

  const PostMessageList = postMessageList?.map((postMessageInfo) => {
    return (
      <PostItem
        postInfo={postMessageInfo}
        key={postMessageInfo.userId + postMessageInfo.createdTime}
      ></PostItem>
    );
  });

  const [subContent, setSubContent] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const submitPostMessage = async () => {
    if (subContent === '') {
      const warnContent = '请输入评论内容！';
      console.warn(warnContent);
      toast.warn(warnContent);
      return;
    }
    try {
      const addPostRes = await addPostMessageApi({
        postId: curPostId,
        userId,
        content: subContent
      });
      setSubContent('');
      inputRef.current!.value = '';
      init();
      console.log(addPostRes);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  return (
    <div className={styles.postDetailPage}>
      <div className={styles.postDetailWrap}>
        <PostItem postInfo={postInfo}></PostItem>
        <div className={styles.inputWrap}>
          <input
            className={styles.input}
            placeholder={'请输入评论内容'}
            ref={inputRef}
            onChange={(e) => {
              setSubContent(e.target.value);
            }}
          />
          <SimpleButton
            btnTxt={'确认'}
            margin={'20px'}
            onClick={submitPostMessage}
          ></SimpleButton>
        </div>
        <div className={styles.messageTitle}>评论</div>
        <div className={styles.postMessageList}>
          <>{PostMessageList}</>
          <div className={styles.messageBtmTxt}>评论到底啦~</div>
        </div>
      </div>
    </div>
  );
}
