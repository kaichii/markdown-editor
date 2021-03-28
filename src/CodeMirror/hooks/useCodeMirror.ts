import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import CodeMirror from "codemirror";
import { ReactCodeMirrorProps } from "..";

export function useCodeMirror(props: ReactCodeMirrorProps) {
  const rootRef = useRef(null);
  const editor = useRef<CodeMirror.Editor | null>(null);

  const handleChange = useCallback(
    (instance: CodeMirror.Editor) => {
      if (props.onChange) props.onChange(instance.getValue());
    },
    // eslint-disable-next-line
    [props.onChange]
  );

  useEffect(() => {
    if (editor.current?.getValue() !== props.value) {
      editor.current?.setValue(props.value);
    }
  }, [props]);

  useLayoutEffect(() => {
    editor.current = CodeMirror(rootRef.current!, {
      value: props.value,
      inputStyle: props.inputStyle ?? "contenteditable",
      ...props,
    });

    editor.current.on("change", handleChange);

    editor.current.refresh();
    editor.current.focus();
    // eslint-disable-next-line
  }, []);

  return {
    rootRef,
  };
}
