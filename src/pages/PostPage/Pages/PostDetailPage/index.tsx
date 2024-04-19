import { useEffect } from 'react';
import SimpleButton from '../../../../components/SimpleButton';
import PostItem from '../../components/PostItem';
import styles from './PostDetailPage.module.less';

export default function PostDetailPage() {
  useEffect(() => {
    console.log('PostDetailPage');
  });

  return (
    <div className={styles.postDetailPage}>
      <div className={styles.postDetailWrap}>
        <PostItem></PostItem>
        <div className={styles.inputWrap}>
          <input className={styles.input} placeholder={'请输入评论内容'} />
          <SimpleButton btnTxt={'确认'} margin={'20px'}></SimpleButton>
        </div>
        <div className={styles.messageTitle}>评论</div>
        <div className={styles.postMessageList}>
          <PostItem></PostItem>
          <div className={styles.messageBtmTxt}>评论到底啦~</div>
        </div>
      </div>
    </div>
  );
}
