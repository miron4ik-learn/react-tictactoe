import { useEffect, useState } from 'react'
import Board from './models/Board'
import Player from './models/Player'
import Cross from './models/figures/Cross'
import Circle from './models/figures/Circle'
import './App.css'
import BoardComponent from './components/BoardComponent'
import Result from './components/Result'

function App() {
  const [ board, setBoard ] = useState(new Board())
  const [ result, setResult ] = useState('')

  const [ crossPlayer ] = useState(new Player(Cross))
  const [ circlePlayer ] = useState(new Player(Circle))
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

  const newGame = () => {
    setCurrentPlayer(crossPlayer)
    setResult('')
    restart()
  }

  return (
    <div className="app">
      <Result text={result} />

      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
        setResult={setResult} />

      <button className='new-game' onClick={newGame}>Новая игра</button>
    </div>
  )
}

export default App
