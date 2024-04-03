import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomeNav.module.less';

enum btnListEnum {
  chat = 'chat',
  doc = 'doc'
}

export default function ChatNav() {
  useEffect(() => {
    console.log('ChatNav');
  });

  //   const [focusBtn, setFocusBtn] = useState(btnListEnum.document);

  const nav = useNavigate();

  const btnHandler = (btnName: string) => {
    nav(`${btnName}`);
  };

  return (
    <div className={styles.chatNav}>
      <div
        className={styles.navBtn}
        onClick={() => btnHandler(btnListEnum.chat)}
      >
        关系
      </div>
      <div
        className={styles.navBtn}
        onClick={() => btnHandler(btnListEnum.doc)}
      >
        文档
      </div>
    </div>
  );
}
