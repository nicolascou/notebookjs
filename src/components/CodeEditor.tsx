import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import { useRef } from 'react';
import { useAppSelector } from '../app/hooks';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const editorRef = useRef<any>();
  
  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue());
    })
  }
  
  return (
    <div className='codeEditor'>
      <MonacoEditor theme='dark' language='javascript' 
        height="100%"
        editorDidMount={onEditorDidMount}
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