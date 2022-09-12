import { useRef } from 'react'
import { FigureNames } from '../models/figures/Figure'
import CellComponent from './CellComponent'

const BoardComponent = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const audioCross = useRef(null)
  const audioCircle = useRef(null)

  const click = (cell) => {
    if(cell.isEmpty()) {
      const figure = new currentPlayer.classFigure(cell)
      cell.setFigure(figure)

      if(figure.name === FigureNames.CROSS) {
        audioCross.current.play()
      } else {
        audioCircle.current.play()
      }

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
      <audio ref={audioCross} src='cross.mp3' />
      <audio ref={audioCircle} src='circle.mp3' />

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