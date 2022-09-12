import { useEffect, useState } from 'react'
import Board from './models/Board'
import Player from './models/Player'
import Cross from './models/figures/Cross'
import Circle from './models/figures/Circle'
import './App.css'
import BoardComponent from './components/BoardComponent'

function App() {
  const [ board, setBoard ] = useState(new Board())

  const [ crossPlayer, setCrossPlayer ] = useState(new Player(Cross))
  const [ circlePlayer, setCirclePlayer ] = useState(new Player(Circle))
  const [ currentPlayer, setCurrentPlayer ] = useState(null)

  useEffect(() => {
    restart()
    setCurrentPlayer(crossPlayer)
  }, [])

  const swapPlayer = () => {
    setCurrentPlayer(
      currentPlayer.classFigure === Cross
      ? circlePlayer : crossPlayer
    )
  }

  const restart = () => {
    const newBoard = new Board()
    newBoard.initCells()
    setBoard(newBoard)
  }

  return (
    <div className="app">
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer} />
    </div>
  )
}

export default App
