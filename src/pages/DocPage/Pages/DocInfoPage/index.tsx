import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  deleteCollaDocApi,
  getCollaDocInfoApi
} from '../../../../api/collaDoc';
import { getGroupInfoApi } from '../../../../api/relationship/group';
import Avatar from '../../../../components/Avatar';
import SimpleButton from '../../../../components/SimpleButton';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import { ICollaDocInfo } from '../../../../types/collaDoc';
import { IGroupInfo } from '../../../../types/relationship';
import { openNewDoc } from '../../../../utils/url';
import styles from './DocInfoPage.module.less';

export default function DocInfoPage() {
  const { userId, curDocId } = useUserContext();
  const { navToHome, navToSubmitDocInfo } = useNav();
  const [collaDocInfo, setcollaDocInfo] = useState<ICollaDocInfo>();
  const [groupInfo, setGroupInfo] = useState<IGroupInfo>();

  const init = async () => {
    let groupId = '';
    try {
      const collaDocInfoRes = await getCollaDocInfoApi({
        docId: curDocId
      });
      groupId = collaDocInfoRes.groupId;
      setcollaDocInfo(collaDocInfoRes);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
    try {
      const groupInfoRes = await getGroupInfoApi({
        groupId
      });
      setGroupInfo(groupInfoRes);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  useEffect(() => {
    console.log('DocInfoPage');
    init();
  }, [curDocId]);

  const handleOpenDoc = async () => {
    openNewDoc({ docId: curDocId, userId });
  };

  const handleDeleteDoc = async () => {
    try {
      const deleteCollaDocRes = await deleteCollaDocApi({
        docId: curDocId
      });
      toast.success('删除文档成功');
      navToHome();
      console.log(deleteCollaDocRes);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  return (
    <div className={styles.docInfoPage}>
      <Avatar size={100} img={groupInfo?.avatarImg}></Avatar>
      <div className={styles.docName}>{collaDocInfo?.docName}</div>
      <div className={styles.fromGroup}>来自群组{groupInfo?.groupName}</div>
      <div className={styles.docIntroduction}>
        {collaDocInfo?.docIntroduction}
      </div>
      <div className={styles.btnWrap}>
        <SimpleButton
          btnTxt={'编辑资料'}
          onClick={navToSubmitDocInfo}
          width={80}
          margin="10px"
        ></SimpleButton>
        <SimpleButton
          btnTxt={'打开文档'}
          onClick={handleOpenDoc}
          width={80}
          margin="10px"
        ></SimpleButton>
        <SimpleButton
          btnTxt={'删除文档'}
          onClick={handleDeleteDoc}
          width={80}
          margin="10px"
        ></SimpleButton>
      </div>
    </div>
  );
}
