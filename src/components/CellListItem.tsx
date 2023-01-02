import React from 'react'
import { CellContainerProps } from '../types/cell';
import { ActionBar, CodeCell, TextEditor } from './';

const CellListItem: React.FC<CellContainerProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === 'code') {
    child = <CodeCell cell={cell} />
  } else {
    child = <TextEditor cell={cell} />
  }
  
  return (
    <div style={{ position: 'relative', margin: '0 1.5rem' }} className='animate__animated animate__fadeIn'>
      <ActionBar id={cell.id} />
      {child}
    </div>
  )
}

export default CellListItem