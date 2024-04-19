import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SimpleButton from '../../components/SimpleButton';
import styles from './PostPage.module.less';
import PostItem from './components/PostItem';

export default function PostPage() {
  useEffect(() => {
    console.log('PostPage');
  });

  return (
    <div className={styles.postPage}>
      <div className={styles.postListWrap}>
        <div className={styles.inputWrap}>
          <textarea
            placeholder="请输入动态内容"
            className={styles.textArea}
          ></textarea>
          <SimpleButton btnTxt={'发送'} margin={'10px'}></SimpleButton>
        </div>
        <div className={styles.postList}>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
