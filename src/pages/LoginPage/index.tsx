import { useEffect, useState } from 'react';
import { loginApi, registerApi } from '../../api/userAuth';
import CardWrap from '../../components/CardWrap';
import { useNav } from '../../hooks/useNav';
import { useUserContext } from '../../hooks/useUserContext';
import styles from './LoginPage.module.less';

export default function LoginPage() {
  useEffect(() => {
    console.log('LoginPage');
    if (userInfo.isLogin) {
      navToRelationship();
    }
  });

  const { userInfo, setUserInfo } = useUserContext();
  const { navToRelationship } = useNav();
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');

  const loginHandler = async () => {
    console.log('loginHandler');
    if (userId === '' || userPwd === '') {
      console.warn('帐号或密码不能为空！');
      return;
    }
    try {
      const loginRes = await loginApi({ userId, userPwd });
      console.log(loginRes);
      setUserInfo((current) => ({
        ...current,
        isLogin: true,
        userId: loginRes.userId
      }));
    } catch (err) {
      console.error('err', err);
    }
  };

  const registerHandler = async () => {
    if (userId === '' || userPwd === '') {
      console.warn('帐号或密码不能为空！');
      return;
    }
    try {
      console.log(await registerApi({ userId, userPwd }));
    } catch (err) {
      console.error(err);
    }
  };

  const loginContent = (
    <div className={styles.loginContent}>
      <div className={styles.inputWrap}>
        <div className={styles.inputItem}>
          <div className={styles.inputName}>帐号: </div>
          <input
            type="text"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.inputItem}>
          <div className={styles.inputName}>密码: </div>
          <input
            type="password"
            value={userPwd}
            onChange={(e) => {
              setUserPwd(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className={styles.btnBar}>
        <div className={styles.btn} onClick={loginHandler}>
          登录
        </div>
        <div className={styles.btn} onClick={registerHandler}>
          注册
        </div>
      </div>
    </div>
  );

  return <CardWrap titleContent="登录">{loginContent}</CardWrap>;
}
