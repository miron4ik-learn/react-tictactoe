import CellComponent from './CellComponent'

const BoardComponent = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const click = (cell) => {
    if(cell.isEmpty()) {
      const figure = new currentPlayer.classFigure(cell)
      cell.setFigure(figure)
      swapPlayer()
      updateBoard()
    }
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <div className='board'>
      {board.cells.map(cell =>
        <CellComponent
          click={click}
          cell={cell}
          key={cell.index} />
      )}
    </div>
  )
}

export default BoardComponent