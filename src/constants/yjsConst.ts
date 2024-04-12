import 'quill/dist/quill.snow.css';
import { QuillBinding } from 'y-quill';
import { WebrtcProvider } from 'y-webrtc';
import * as Y from 'yjs';

// A Yjs document holds the shared data
const ydoc = new Y.Doc();
// Define a shared text type on the document
const ytext = ydoc.getText('quill');

const provider = new WebrtcProvider('quill-test', ydoc);

const binding = new QuillBinding(ytext, quill, provider.awareness);

export default function bindQuill() {
    
}
