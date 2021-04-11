import React, { useRef, useEffect } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { editorOptions } from "./utils/editorSettings";
import "./Editor.css";

const Editor: React.FC = () => {
  const editorEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorEl.current) {
      const editor = monaco.editor.create(editorEl.current, editorOptions);
    }
  }, []);

  return (
    <>
      <div ref={editorEl} className="editor"></div>
    </>
  );
};

export default Editor;
