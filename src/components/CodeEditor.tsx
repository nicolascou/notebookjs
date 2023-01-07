import Editor, { OnMount } from '@monaco-editor/react';

import { useRef } from 'react';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const editorRef = useRef<any>();
  
  const onEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = monaco;
    editor.onDidChangeModelContent(() => {
      onChange(editor.getValue());
    })
  }
  
  return (
    <div className='codeEditor'>
      <Editor theme='vs-dark' defaultLanguage='javascript' 
        height="100%"
        onMount={onEditorDidMount}
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          lineNumbersMinChars: 3,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
        }}
        value={initialValue} />
    </div>
  );
}

export default CodeEditor;