import "codemirror/keymap/emacs";
import "codemirror/keymap/sublime";
import "codemirror/keymap/vim";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/markdown/markdown";
import React from "react";
import { useCodeMirror } from "./hooks/useCodeMirror";
import "./theme/custom.css";

export type ReactCodeMirrorProps = CodeMirror.EditorConfiguration & {
  onChange?: (value: string) => void;
};

const ReactCodeMirror: React.FC<ReactCodeMirrorProps> = (
  props: ReactCodeMirrorProps
) => {
  const { rootRef } = useCodeMirror(props);

  return <div ref={rootRef} />;
};

export default ReactCodeMirror;
