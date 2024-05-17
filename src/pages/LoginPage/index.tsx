import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { loginApi, registerApi } from '../../api/userAuth';
import CardWrap from '../../components/CardWrap';
import { useNav } from '../../hooks/useNav';
import { useUserContext } from '../../hooks/useUserContext';
import styles from './LoginPage.module.less';

export default function LoginPage() {
  useEffect(() => {
    console.log('LoginPage');
    if (isLogin) {
      navToHome();
    }
  });

  const { isLogin, loginInit } = useUserContext();
  const { navToHome } = useNav();
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');

  const loginHandler = async () => {
    if (userId === '' || userPwd === '') {
      const warnContent = '帐号或密码不能为空！';
      console.warn(warnContent);
      toast.warn(warnContent);
      return;
    }
    try {
      const loginRes = await loginApi({ userId, userPwd });
      loginInit(loginRes.userId);
      const sucContent = '登录成功';
      toast.success(sucContent);
    } catch (err) {
      console.error('err', err);
      toast.error(String(err));
    }
  };

  const registerHandler = async () => {
    if (userId === '' || userPwd === '') {
      const warnContent = '帐号或密码不能为空！';
      console.warn(warnContent);
      toast.warn(warnContent);
      return;
    }
    try {
      await registerApi({ userId, userPwd });
      const sucContent = '注册成功';
      toast.success(sucContent);
    } catch (err) {
      console.error(err);
      toast.error(String(err));
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
            placeholder="请输入账号id"
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
            placeholder="请输入账号密码"
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

  return (
    <div className={styles.loginPage}>
      <CardWrap titleContent="登录">{loginContent}</CardWrap>
    </div>
  );
}
