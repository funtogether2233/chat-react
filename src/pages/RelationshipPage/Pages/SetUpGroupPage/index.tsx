import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { setUpNewGroupApi } from '../../../../api/relationship/group';
import SimpleButton from '../../../../components/SimpleButton';
import { useUserContext } from '../../../../hooks/useUserContext';
import styles from './SetUpGroupPage.module.less';

export default function SetUpGroupPage() {
  useEffect(() => {
    console.log('SetUpGroupPage');
  });

  const { userId } = useUserContext();
  const [newGroupId, setNewGroupId] = useState('');
  const [newGroupName, setNewGroupName] = useState('');

  const submitNewGroup = async () => {
    if (newGroupId === '' || newGroupName === '') {
      const warnContent = '群id或群昵称不能为空！';
      console.warn(warnContent);
      toast.warn(warnContent);
      return;
    }
    try {
      const addGroupRes = await setUpNewGroupApi({
        userId,
        groupId: newGroupId,
        groupName: newGroupName
      });
      console.log(addGroupRes);
      toast.success('创建群聊成功');
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  return (
    <div className={styles.setUpGroupPage}>
      <div className={styles.inputWrap}>
        <div className={styles.inputName}>群聊id：</div>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => {
            setNewGroupId(e.target.value);
          }}
          placeholder="请输入群聊id"
        />
      </div>
      <div className={styles.inputWrap}>
        <div className={styles.inputName}>群聊名称：</div>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => {
            setNewGroupName(e.target.value);
          }}
          placeholder="请输入群聊名称"
        />
      </div>
      <SimpleButton
        btnTxt={'创建群聊'}
        onClick={submitNewGroup}
        width={100}
        margin="20px"
      ></SimpleButton>
    </div>
  );
}
