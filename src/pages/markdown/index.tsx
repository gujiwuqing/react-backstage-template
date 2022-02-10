import { useState } from 'react';
import Editor from 'md-editor-rt';
import sanitizeHtml from 'sanitize-html';
import 'md-editor-rt/lib/style.css';
import  style from './index.module.less'

export default function App() {
  const [text, setText] = useState('hello md-editor-rt！');

  return (
    <Editor
      modelValue={text}
      editorClass={style.editor}
      sanitize={(html) => sanitizeHtml(html)}
      onChange={(modelValue) => {
        setText(modelValue);
      }}
    />
  );
}
