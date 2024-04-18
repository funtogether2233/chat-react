import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import {
  getGroupInfoApi,
  updateGroupInfoApi
} from '../../../../api/relationship';
import SimpleButton from '../../../../components/SimpleButton';
import { useUserContext } from '../../../../hooks/useUserContext';
import { IGroupInfo } from '../../../../types/relationship';
import styles from './SubmitGroupInfoPage.module.less';

export default function SubmitGroupInfoPage() {
  useEffect(() => {
    init();
    console.log('SubmitGroupInfoPage');
  }, []);

  const { curGroupId } = useUserContext();
  const [groupInfo, setGroupInfo] = useState<IGroupInfo>();
  const groupNameRef = useRef<HTMLInputElement>(null);
  const groupIntroductionRef = useRef<HTMLInputElement>(null);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupIntroduction, setNewGroupIntroduction] = useState('');

  const init = async () => {
    try {
      const groupInfoRes = await getGroupInfoApi({
        groupId: curGroupId
      });
      setGroupInfo(groupInfoRes);
      groupNameRef.current!.value = groupInfoRes.groupName;
      groupIntroductionRef.current!.value = groupInfoRes.groupIntroduction;
      setNewGroupName(groupInfoRes.groupName);
      setNewGroupIntroduction(groupInfoRes.groupIntroduction);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  const updateUserInfo = async () => {
    if (newGroupName === '' || newGroupIntroduction === '') {
      const warnContent = '信息不能为空！';
      console.warn(warnContent);
      toast.warn(warnContent);
      return;
    }
    try {
      const updateGroupInfoRes = await updateGroupInfoApi({
        groupId: curGroupId,
        groupName: newGroupName,
        groupIntroduction: newGroupIntroduction
      });
      console.log(updateGroupInfoRes);
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
      <SimpleButton
        btnTxt={'更新信息'}
        onClick={updateUserInfo}
        width={100}
        margin="20px"
      ></SimpleButton>
    </div>
  );
}
