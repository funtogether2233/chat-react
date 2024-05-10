import Quill from 'quill';
import QuillCursors from 'quill-cursors';
import 'quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { QuillBinding } from 'y-quill';
import { WebsocketProvider } from 'y-websocket';
import * as Y from 'yjs';
import { getCollaDocInfoApi } from '../../api/collaDoc';
import { getGroupInfoApi } from '../../api/relationship/group';
import { getUserInfoApi } from '../../api/relationship/user';
import Avatar from '../../components/Avatar';
import { ICollaDocInfo } from '../../types/collaDoc';
import { IGroupInfo, IUserInfo } from '../../types/relationship';
import styles from './CollaDocPage.module.less';

export default function CollaDocPage() {
  useEffect(() => {
    console.log('CollaDocPage');
  });

  const url = window.location.href;
  const tmp = url.split('?');
  const paramsStr = '?' + tmp[tmp.length - 1];
  const searchParams = new URLSearchParams(paramsStr);
  const docId = searchParams.get('docId') || '';
  const userId = searchParams.get('userId') || '';

  useEffect(() => {
    console.log('执行一次');
    init();

    Quill.register('modules/cursors', QuillCursors);
    const quill = new Quill(document.querySelector('#editor')!, {
      modules: {
        cursors: true,
        toolbar: [
          // adding some basic Quill content features
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block']
        ],
        history: {
          // Local undo shouldn't undo changes from remote users
          userOnly: true
        }
      },
      placeholder: 'Start collaborating...',
      theme: 'snow' // 'bubble' is also great
    });
    // A Yjs document holds the shared data
    const ydoc = new Y.Doc();
    // Define a shared text type on the document
    const ytext = ydoc.getText('quill');

    // connect to the public demo server (not in production!)
    const provider = new WebsocketProvider(
      'ws://localhost:3000',
      //   'quill-demo-room',
      `colla-doc-${docId}`,
      ydoc
    );

    // const provider = new WebrtcProvider('quill123', ydoc);

    // Create an editor-binding which "binds" the quill editor to a Y.Text type.
    const binding = new QuillBinding(ytext, quill, provider.awareness);

    window.addEventListener('blur', () => {
      quill.blur();
    });
  }, []);

  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const [collaDocInfo, setcollaDocInfo] = useState<ICollaDocInfo>();
  const [groupInfo, setGroupInfo] = useState<IGroupInfo>();

  const init = async () => {
    let groupId = '';
    try {
      const userInfoRes = await getUserInfoApi({
        userId
      });
      setUserInfo(userInfoRes);
    } catch (err) {
      toast.error(String(err));
      console.error('err', err);
    }
    try {
      const collaDocInfoRes = await getCollaDocInfoApi({
        docId
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

  return (
    <div className={styles.collaDocPage}>
      <div className={styles.infoWrap}>
        <div className={styles.userInfo}>
          <Avatar img={userInfo?.avatarImg}></Avatar>
          <div className={styles.userName}>{userInfo?.userName}</div>
        </div>
        <div className={styles.docInfoWrap}>
          <div className={styles.docInfo}>
            <div className={styles.docName}>{collaDocInfo?.docName}</div>
            <div className={styles.midTxt}>来自群组</div>
            <div className={styles.groupName}>{groupInfo?.groupName}</div>
          </div>
          <div className={styles.docIntroduction}>
            {collaDocInfo?.docIntroduction}
          </div>
        </div>
      </div>
      <div className={styles.docContent}>
        <div id="editor"></div>
      </div>
    </div>
  );
}
