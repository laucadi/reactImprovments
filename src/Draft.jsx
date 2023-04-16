import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "./richTextEditor.style.css";

const Draft = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onChange = (content) => {
    console.log(content);
  };
  return <Editor editorState={editorState} onChange={onChange} />;
};

export default Draft;
