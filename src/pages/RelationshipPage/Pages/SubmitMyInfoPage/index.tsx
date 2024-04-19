import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import {
  getUserInfoApi,
  updateUserInfoApi
} from '../../../../api/relationship/user';
import SimpleButton from '../../../../components/SimpleButton';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IUserInfo } from '../../../../types/relationship';
import styles from './SubmitMyInfoPage.module.less';

export default function SubmitMyInfoPage() {
  useEffect(() => {
    init();
    console.log('SubmitMyInfoPage');
  }, []);

  const { userId } = useUserContext();
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const userNameRef = useRef<HTMLInputElement>(null);
  const userIntroductionRef = useRef<HTMLInputElement>(null);
  const avatarImgRef = useRef<HTMLInputElement>(null);
  const [newUserName, setNewUserName] = useState('');
  const [newUserIntroduction, setNewUserIntroduction] = useState('');
  const [newAvatarImg, setNewAvatarImg] = useState('');

  const init = async () => {
    try {
      const userInfoRes = await getUserInfoApi({
        userId
      });
      setUserInfo(userInfoRes);
      userNameRef.current!.value = userInfoRes.userName;
      userIntroductionRef.current!.value = userInfoRes.userIntroduction;
      avatarImgRef.current!.value = userInfoRes.avatarImg;
      setNewUserName(userInfoRes.userName);
      setNewUserIntroduction(userInfoRes.userIntroduction);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  const updateUserInfo = async () => {
    if (
      newUserName === '' ||
      newUserIntroduction === '' ||
      newAvatarImg === ''
    ) {
      const warnContent = '信息不能为空！';
      console.warn(warnContent);
      toast.warn(warnContent);
      return;
    }
    try {
      const updateUserInfoRes = await updateUserInfoApi({
        userId,
        userName: newUserName,
        userIntroduction: newUserIntroduction,
        avatarImg: newAvatarImg
      });
      console.log(updateUserInfoRes);
      toast.success('更新成功');
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  return (
    <div className={styles.submitMyInfoPage}>
      <div className={styles.inputWrap}>
        <div className={styles.inputName}>用户名称：</div>
        <input
          ref={userNameRef}
          className={styles.input}
          type="text"
          onChange={(e) => {
            setNewUserName(e.target.value);
          }}
        />
      </div>
      <div className={styles.inputWrap}>
        <div className={styles.inputName}>个性签名：</div>
        <input
          ref={userIntroductionRef}
          className={styles.input}
          type="text"
          onChange={(e) => {
            setNewUserIntroduction(e.target.value);
          }}
        />
      </div>
      <div className={styles.inputWrap}>
        <div className={styles.inputName}>头像链接：</div>
        <input
          ref={avatarImgRef}
          className={styles.input}
          type="text"
          onChange={(e) => {
            setNewAvatarImg(e.target.value);
          }}
        />
      </div>
      <SimpleButton
        btnTxt={'更新信息'}
        onClick={updateUserInfo}
        width={100}
        margin="20px"
      ></SimpleButton>
    </div>
  );
}
