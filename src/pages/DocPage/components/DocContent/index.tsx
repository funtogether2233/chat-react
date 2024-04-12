import Quill from 'quill';
import QuillCursors from 'quill-cursors';
import 'quill/dist/quill.snow.css';
import { useEffect } from 'react';
import { QuillBinding } from 'y-quill';
import { WebsocketProvider } from 'y-websocket';
import * as Y from 'yjs';
import styles from './DocContent.module.less';

export default function DocContent() {
  useEffect(() => {
    console.log('DocContent');
  });

  useEffect(() => {
    Quill.register('modules/cursors', QuillCursors);

    console.log('执行一次');
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
      'quill-demo-room',
      ydoc
    );

    // const provider = new WebrtcProvider('quill123', ydoc);

    // Create an editor-binding which "binds" the quill editor to a Y.Text type.
    const binding = new QuillBinding(ytext, quill, provider.awareness);

    window.addEventListener('blur', () => {
      quill.blur();
    });
  }, []);

  return (
    <div className={styles.docContent}>
      <div id="editor"></div>
    </div>
  );
}
