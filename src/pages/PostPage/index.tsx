import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  addPostApi,
  getAllPostListApi,
  getUserPostListApi
} from '../../api/post';
import SimpleButton from '../../components/SimpleButton';
import { useNav } from '../../hooks/useNav';
import { useUserContext } from '../../hooks/useUserContext';
import { IPostInfo } from '../../types/post';
import styles from './PostPage.module.less';
import PostItem from './components/PostItem';

export default function PostPage() {
  useEffect(() => {
    init();
    console.log('PostPage');
  }, []);

  const { userId, curPostUserId } = useUserContext();
  const { navToPostDetail } = useNav();
  const [postListInfo, setPostListInfo] = useState<IPostInfo[]>([]);

  const init = async () => {
    if (curPostUserId === '') {
      try {
        const allPostListRes = await getAllPostListApi({
          userId
        });
        setPostListInfo(allPostListRes.allPostList);
      } catch (err) {
        toast.error(String(err));
        console.error('err', err);
      }
      return;
    }
    try {
      const userPostListRes = await getUserPostListApi({
        userId
      });
      setPostListInfo(userPostListRes.postList);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
    return;
  };

  const PostList = postListInfo.map((postInfo) => {
    const postId = String(postInfo.id);
    const onClick = () => {
      navToPostDetail(postId);
    };
    return (
      <PostItem
        postInfo={postInfo}
        onClick={onClick}
        key={postInfo.id}
      ></PostItem>
    );
  });

  const [subContent, setSubContent] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const submitPost = async () => {
    if (subContent === '') {
      const warnContent = '请输入动态内容！';
      console.warn(warnContent);
      toast.warn(warnContent);
      return;
    }
    try {
      const addPostRes = await addPostApi({
        userId,
        content: subContent
      });
      setSubContent('');
      textAreaRef.current!.value = '';
      init();
      navToPostDetail(addPostRes.postId);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  return (
    <div className={styles.postPage}>
      <div className={styles.postListWrap}>
        <div className={styles.inputWrap}>
          <textarea
            placeholder="请输入动态内容"
            className={styles.textArea}
            ref={textAreaRef}
            onChange={(e) => {
              setSubContent(e.target.value);
            }}
          ></textarea>
          <SimpleButton
            btnTxt={'发送'}
            margin={'10px'}
            onClick={submitPost}
          ></SimpleButton>
        </div>
        <div className={styles.postTitle}>动态</div>
        <div className={styles.postList}>{PostList}</div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
