import React from "react";
import "./App.css";
import ReactCodeMirror from "./CodeMirror";

const storageKey = "online-markdown-editor";

function App() {
  return (
    <ReactCodeMirror
      value={localStorage.getItem(storageKey) ?? ""}
      lineNumbers
      lineWrapping
      theme="custom"
      keyMap="sublime"
      mode="markdown"
      onChange={(value) => localStorage.setItem(storageKey, value)}
    />
  );
}

export default App;
