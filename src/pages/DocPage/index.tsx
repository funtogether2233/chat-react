import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCollaDocListApi } from '../../api/collaDoc';
import ListWrap from '../../components/ListWrap';
import { useNav } from '../../hooks/useNav';
import { useUserContext } from '../../hooks/useUserContext';
import { IDocItemInfo } from '../../types/collaDoc';
import styles from './DocPage.module.less';
import DocItem from './components';

export default function DocPage() {
  useEffect(() => {
    console.log('DocPage');
    init();
  }, []);

  const { userId } = useUserContext();
  const { navToDocInfo } = useNav();
  const [collaDocList, setCollaDocList] = useState<IDocItemInfo[]>([]);

  const init = async () => {
    try {
      const collaDocListRes = await getCollaDocListApi({
        userId
      });
      setCollaDocList(collaDocListRes.docList);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
  };

  const docList = collaDocList.map((docInfo) => {
    return (
      <DocItem
        docInfo={docInfo}
        onClick={() => navToDocInfo(String(docInfo.id))}
        key={docInfo.id}
      ></DocItem>
    );
  });

  return (
    <div className={styles.docPage}>
      <ListWrap>{docList}</ListWrap>
      <Outlet></Outlet>
    </div>
  );
}
