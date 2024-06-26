import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import {
  getGroupInfoApi,
  updateGroupInfoApi
} from '../../../../api/relationship/group';
import SimpleButton from '../../../../components/SimpleButton';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IGroupInfo } from '../../../../types/relationship';
import styles from './SubmitGroupInfoPage.module.less';

export default function SubmitGroupInfoPage() {
  useEffect(() => {
    init();
    console.log('SubmitGroupInfoPage');
  }, []);

  const { curGroupId } = useUserContext();
  const { navToGroupInfo } = useNav();
  const [groupInfo, setGroupInfo] = useState<IGroupInfo>();
  const groupNameRef = useRef<HTMLInputElement>(null);
  const groupIntroductionRef = useRef<HTMLInputElement>(null);
  const avatarImgRef = useRef<HTMLInputElement>(null);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupIntroduction, setNewGroupIntroduction] = useState('');
  const [newAvatarImg, setNewAvatarImg] = useState('');

  const init = async () => {
    try {
      const groupInfoRes = await getGroupInfoApi({
        groupId: curGroupId
      });
      setGroupInfo(groupInfoRes);
      groupNameRef.current!.value = groupInfoRes.groupName;
      groupIntroductionRef.current!.value = groupInfoRes.groupIntroduction;
      avatarImgRef.current!.value = groupInfoRes.avatarImg;
      setNewGroupName(groupInfoRes.groupName);
      setNewGroupIntroduction(groupInfoRes.groupIntroduction);
      setNewAvatarImg(groupInfoRes.avatarImg);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  const updateUserInfo = async () => {
    if (
      newGroupName === '' ||
      newGroupIntroduction === '' ||
      newAvatarImg === ''
    ) {
      const warnContent = '信息不能为空！';
      console.warn(warnContent);
      toast.warn(warnContent);
      return;
    }
    try {
      const updateGroupInfoRes = await updateGroupInfoApi({
        groupId: curGroupId,
        groupName: newGroupName,
        groupIntroduction: newGroupIntroduction,
        avatarImg: newAvatarImg
      });
      console.log(updateGroupInfoRes);
      navToGroupInfo();
      toast.success('更新成功');
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  return (
    <div className={styles.submitGroupInfoPage}>
      <div className={styles.inputWrap}>
        <div className={styles.inputName}>用户名称：</div>
        <input
          ref={groupNameRef}
          className={styles.input}
          type="text"
          onChange={(e) => {
            setNewGroupName(e.target.value);
          }}
        />
      </div>
      <div className={styles.inputWrap}>
        <div className={styles.inputName}>群聊简介：</div>
        <input
          ref={groupIntroductionRef}
          className={styles.input}
          type="text"
          onChange={(e) => {
            setNewGroupIntroduction(e.target.value);
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
        width={80}
        margin="20px"
      ></SimpleButton>
    </div>
  );
}
