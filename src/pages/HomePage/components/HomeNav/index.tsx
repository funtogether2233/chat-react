import { useState } from 'react';
import Avatar from '../../../../components/Avatar';
import { useNav } from '../../../../hooks/useNav';
import { routerEnum } from '../../../../router';
import styles from './HomeNav.module.less';

export default function ChatNav() {
  const { navToRelationship, navToMyInfo, navToDoc, navToPost } = useNav();
  const [homeNavState, setHomeNavState] = useState<routerEnum>(
    routerEnum.relationship
  );

  const navHandler = (navState: routerEnum, navTohandler: () => void) => {
    if (homeNavState === navState) {
      return;
    }
    setHomeNavState(navState);
    navTohandler();
  };

  return (
    <div className={styles.homeNav}>
      <Avatar
        onClick={() => navHandler(routerEnum.myInfo, navToMyInfo)}
      ></Avatar>
      <div
        className={styles.navBtn}
        onClick={() => navHandler(routerEnum.relationship, navToRelationship)}
      >
        关系
      </div>
      <div
        className={styles.navBtn}
        onClick={() => navHandler(routerEnum.doc, navToDoc)}
      >
        文档
      </div>
      <div
        className={styles.navBtn}
        onClick={() => navHandler(routerEnum.post, navToPost)}
      >
        动态
      </div>
    </div>
  );
}
