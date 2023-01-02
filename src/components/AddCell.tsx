import { useActions } from '../app/hooks';

interface AddCellProps {
  nextCellId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId }) => {
  const { insertCell } = useActions();
  
  return (
    <div className='add-cell'>
      <div className='add-cell-buttons'>
        <button onClick={() => insertCell({id: nextCellId, type: 'code', content: '' })}>
          + Code
        </button>
        <button onClick={() => insertCell({id: nextCellId, type: 'text', content: 'Click to edit' })}>
          + Text
        </button>
      </div>
    </div>
  )
}

export default AddCell