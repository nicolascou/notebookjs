import MDEditor from "@uiw/react-md-editor";
import { useState, useEffect, useRef } from 'react';
import { CellContainerProps } from '../types/cell';
import { useActions } from '../app/hooks';

const TextEditor: React.FC<CellContainerProps> = ({ cell }) => {
  const [editing, setEditing] = useState(false);
  const editorRef = useRef<any>();
  const { updateCell } = useActions();

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (editorRef.current && event.target && editorRef.current.contains(event.target)) {
        return;
      } else {
        setEditing(false);
      }
    };
    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, {capture: true});
    }
  }, [])

  if (editing) {
    return (
      <div ref={editorRef} className='text-editor'>
        <MDEditor
          value={cell.content}
          onChange={s => updateCell({id: cell.id, content: s || ''})}
        />
      </div>
    )
  }
  
  return (
    <div onClick={() => setEditing(true)} className="text-editor markdown-preview">
      <MDEditor.Markdown source={cell.content} />
    </div>
  )
}

export default TextEditor;