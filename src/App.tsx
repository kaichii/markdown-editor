import React, { FC, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";
import ReactCodeMirror from "./CodeMirror";
import gfm from "remark-gfm";

const storageKey = "online-markdown-editor";

const App: FC = () => {
  const [value, setValue] = useState<string>(() => {
    return localStorage.getItem(storageKey) ?? "";
  });

  return (
    <div className="app">
      <ReactCodeMirror
        value={value}
        lineNumbers
        lineWrapping
        theme="custom"
        keyMap="sublime"
        mode="markdown"
        onChange={(value) => {
          setValue(value);
          localStorage.setItem(storageKey, value);
        }}
      />
      <div className="react-markdown">
        <ReactMarkdown plugins={[gfm]} children={value} />
      </div>
    </div>
  );
};

export default App;
