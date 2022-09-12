import CellComponent from './CellComponent'

const BoardComponent = ({ board, setBoard }) => {
  return (
    <div className='board'>
      {board.cells.map(cell =>
        <CellComponent
          cell={cell}
          key={cell.index} />
      )}
    </div>
  )
}

export default BoardComponent