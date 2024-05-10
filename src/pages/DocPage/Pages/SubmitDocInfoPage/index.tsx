import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import {
  getCollaDocInfoApi,
  updateCollaDocInfoApi
} from '../../../../api/collaDoc';
import SimpleButton from '../../../../components/SimpleButton';
import { useNav } from '../../../../hooks/useNav';
import { useUserContext } from '../../../../hooks/useUserContext';
import { ICollaDocInfo } from '../../../../types/collaDoc';
import styles from './SubmitDocInfoPage.module.less';

export default function SubmitDocInfoPage() {
  useEffect(() => {
    init();
    console.log('SubmitMyInfoPage');
  }, []);

  const { curDocId } = useUserContext();
  const { navToDocInfo } = useNav();
  const [collaDocInfo, setcollaDocInfo] = useState<ICollaDocInfo>();
  const docNameRef = useRef<HTMLInputElement>(null);
  const docIntroductionRef = useRef<HTMLInputElement>(null);
  const [newDocName, setDocUserName] = useState('');
  const [newDocIntroduction, setDocUserIntroduction] = useState('');

  const init = async () => {
    try {
      const collaDocInfoRes = await getCollaDocInfoApi({
        docId: curDocId
      });
      setcollaDocInfo(collaDocInfoRes);
      docNameRef.current!.value = collaDocInfoRes.docName;
      docIntroductionRef.current!.value = collaDocInfoRes.docIntroduction;
      setDocUserName(collaDocInfoRes.docName);
      setDocUserIntroduction(collaDocInfoRes.docIntroduction);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  const updateUserInfo = async () => {
    if (newDocName === '' || newDocIntroduction === '') {
      const warnContent = '信息不能为空！';
      console.warn(warnContent);
      toast.warn(warnContent);
      return;
    }
    try {
      const updateCollaDocInfoRes = await updateCollaDocInfoApi({
        docId: curDocId,
        updateCollaDocDto: {
          docName: newDocName,
          docIntroduction: newDocIntroduction
        }
      });
      console.log(updateCollaDocInfoRes);
      navToDocInfo();
      toast.success('更新成功');
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  return (
    <div className={styles.submitMyInfoPage}>
      <div className={styles.inputWrap}>
        <div className={styles.inputName}>文档名称：</div>
        <input
          ref={docNameRef}
          className={styles.input}
          type="text"
          onChange={(e) => {
            setDocUserName(e.target.value);
          }}
        />
      </div>
      <div className={styles.inputWrap}>
        <div className={styles.inputName}>文档简介：</div>
        <input
          ref={docIntroductionRef}
          className={styles.input}
          type="text"
          onChange={(e) => {
            setDocUserIntroduction(e.target.value);
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
