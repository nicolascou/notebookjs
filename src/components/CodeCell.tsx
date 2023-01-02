import { useEffect } from 'react';
import { CellContainerProps } from '../types/cell';
import { Preview, Resizable, CodeEditor } from './';
import { useActions, useAppSelector } from '../app/hooks';
import { useCumulativeCode } from '../hooks/useCumulativeCode';

const CodeCell: React.FC<CellContainerProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions(); 
  const bundle = useAppSelector(state => state.bundles[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode)
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode);
    }, 750);

    return () => {
      clearTimeout(timer);
    }
  }, [cumulativeCode, cell.id])

  return (
    <Resizable direction='vertical'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row', position: 'relative' }}>
        <Resizable direction='horizontal'>
          <CodeEditor 
            initialValue={cell.content}
            onChange={(value) => updateCell({id: cell.id, content: value})}
          />
        </Resizable>
        {
          !bundle || bundle.loading
          ? <div className='preview-loading'>
            <progress className='animate__animated animate__fadeIn animate__slow'>
              Loading
            </progress>
          </div>
          : <Preview code={bundle.code} err={bundle.err} />
        }
      </div>
    </Resizable>
  );
}

export default CodeCell;