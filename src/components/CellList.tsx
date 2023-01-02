import { useAppSelector } from '../app/hooks';
import { AddCell, CellListItem } from './';

const CellList: React.FC = () => {
  const cells = useAppSelector(({ cells: { order, data} }) => {
    return order.map((id: string) => {
      return data[id];
    })
  })

  const renderedCells = cells.map(cell => (
    <div key={cell.id}>
      <AddCell nextCellId={cell.id} />
      <CellListItem cell={cell} />
      <div className='divider'></div>
    </div>
  ));

  return (
    <div>
      { renderedCells }
      <AddCell nextCellId={null} />
    </div>
  )
}

export default CellList