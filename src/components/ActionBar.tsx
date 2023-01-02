import React from 'react'
import { useActions } from '../app/hooks';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className='action-bar'>
      <button onClick={() => moveCell({id, direction: 'up'})}>
        <i className='fa fa-arrow-up'></i>
      </button>
      <button onClick={() => moveCell({id, direction: 'down'})}>
        <i className='fa fa-arrow-down'></i> 
      </button>
      <button onClick={() => deleteCell(id)}>
        <i className='fa fa-times'></i>
      </button>
    </div>
  )
}

export default ActionBar